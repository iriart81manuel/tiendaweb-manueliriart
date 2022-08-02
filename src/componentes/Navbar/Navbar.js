import './Navbar.css'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

const Navbar = () => {
    return (
      <nav className='NavContainer'>
        <h3>Manuel</h3>
        <div className='Categories'>
         <Button><Link to={`/category/mouses`}>Mouses</Link></Button>
         <Button><Link to={`/category/teclados`}>Teclados</Link></Button>
         <Button><Link to={`/category/auriculares`}>Auriculares</Link></Button>
        </div>
      </nav>
    )
}

export default Navbar