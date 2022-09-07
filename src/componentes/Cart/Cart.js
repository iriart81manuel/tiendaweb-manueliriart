import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { getProducts } from "../../asyncMock"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../services/firebase/index"


const Cart = () => {
    const { cart , totalQuantity,  } = useContext(CartContext)  
    
    const createOrder = () =>{
    const objOrder = {
    buyer: {
        name:"Manuel Iriart",
        phone: "29292929",
        email:"manuel@gmail.com",
    },
    items: cart,
    totalQuantity,

}

}

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