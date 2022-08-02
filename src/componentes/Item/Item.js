import { Link } from 'react-router-dom'

const Item = ({id, name,img, price}) => {
    return (
        <article>
            <header>
                <h2>{name}</h2>
            </header>
            {/* <picture>
                <img src={img} alt={name}/>
            </picture> */}
            <section>
                <p>
                    Precio: ${price}
                </p>
            </section>
            <footer>
                <Link to={`/detail/${id}`}>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item