import "./Navbar.css";

const Navbar = () => {
  return (
  <header>  
    <nav className="Navbar"> 
      <div> Tienda online(img) </div>
      <div>
        <button> Mouses </button> 
        <button> Teclados </button>
        <button> Auriculares </button>
      </div>
      <div><button>Iniciar sesion</button></div>
    </nav>
 </header>
  );
};

export default Navbar
