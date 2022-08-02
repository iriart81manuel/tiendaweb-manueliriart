import { useState, useEffect } from 'react'

const MercadoLibre = () => {
    const [products, setProducts] = useState([])
    const [input, setInput] = useState('')

     useEffect(() => {
         fetch('https:api.mercadolibre.com/sites/MLA/search?q=auto')
             .then(response => {
                 return response.json()
             })
             .then(res => setProducts(res.results))
     }, [])

    const handleSearch = () => {
        fetch('https:api.mercadolibre.com/sites/MLA/search?q=' + input)
            .then(response => {
                return response.json()
            })
            .then(res => setProducts(res.results))
    }

    return (
        <>
            <h1>MercadoLibre</h1>
            <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>
            {products.map(prod => {
                return (
                    <div key={prod.id}>
                        <h3>{prod.title}</h3>
                        <img src={prod.thumbnail} alt={prod.title}/>
                    </div>
                )
            })}
        </>
    )
}

export default MercadoLibre