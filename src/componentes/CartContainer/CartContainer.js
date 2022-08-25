import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Cart from '../Cart/Cart'
import { Link } from 'react-router-dom';

const CartContainer = () => {
  const { cart, getQuantity, getFinalPrice, resetCart } = useContext(CartContext)
  const totalQuantity = getQuantity()
  const total = getFinalPrice()

  if (totalQuantity === 0) {
    return (
      <div className='cartContainerGeneral'>
        <h1 className='titleNoProd'>Tu carrito se encuentra vacio...</h1>
        <Link className='/cart' to='/'>Ver Productos</Link>
      </div>
    )
  }

  return (
    <div>
      <h1 className='titleProd'>Tu carrito 👇</h1>
      <div>
        <Cart products={cart} />
      </div>
      <h3 className='total'>Total: ${total}</h3>
      <div>
        <button className='btnCart' onClick={() => resetCart()}>Vaciar Carrito</button>
       <button><Link to='/order' className='btnCart'>Comprar</Link></button> 
      </div>
    </div>
  )
};

export default CartContainer;