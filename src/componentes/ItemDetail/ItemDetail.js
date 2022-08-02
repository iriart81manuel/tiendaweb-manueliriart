import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, category, img, price, stock, description}) => {

    const handleOnAdd = (quantity) => {
       console.log(`Se agregaron ${quantity} ${category} ${name}`)
    }

    return (
        <>
            <h1>{name} <br></br> ${price} <br></br>{description} <br></br>{img}</h1>
            <ItemCount stock={stock} onAdd={handleOnAdd}/>
        </>
    )
}

export default ItemDetail