import { useState, useEffect } from 'react'
import { getProducts } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({ greeting, setShow, show}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    
    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })   
       
    }, [categoryId])

    if(loading) {
        return <h1>Cargando productos...</h1>
    }

    return (
        <>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer


