import './Navbar.css'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
      <nav className='NavContainer'>
      <Link to={``}><img className='logo' src='/images/logo.png' width='10%' alt='logo'></img></Link>  
        <div className='Categories'>
         <Button><Link to={`/category/mouses`}>Mouses</Link></Button>
         <Button><Link to={`/category/teclados`}>Teclados</Link></Button>
         <Button><Link to={`/category/auriculares`}>Auriculares</Link></Button>
      <div className='cart'><Button><CartWidget/></Button></div>
      </div>
      </nav>
    )
}

export default Navbar