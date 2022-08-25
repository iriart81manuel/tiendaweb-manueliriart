import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    // const quantity = getQuantity()
  

    return(
        <Link to='/cart' className="CartWidget">
          <i className="bi bi-cart3"></i>
          {totalQuantity} 
        </Link>
    );
}

export default CartWidget;