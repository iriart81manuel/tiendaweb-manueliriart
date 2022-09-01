import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'


const Cart = () => {
    const { cart , totalQuantity,  } = useContext(CartContext)  

    if(totalQuantity === 0) {
        return (
            <h1>No hay items en el carrito</h1>
        )
    }

    return (     
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
        </div>
    )
}

export default Cart