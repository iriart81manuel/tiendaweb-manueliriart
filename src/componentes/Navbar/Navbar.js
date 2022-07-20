import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
  <header>  
    <nav className="Navbar"> 
      <div> Tienda online(img) </div>
      <div className="options">
        <button> Mouses </button> 
        <button> Teclados </button>
        <button> Auriculares </button>
      </div>
      <div className="cartlogin"></div>
      <div><button><CartWidget /></button></div>
      <div><button>Iniciar Sesion</button></div>
    </nav>
 </header>
  );
};

export default Navbar
