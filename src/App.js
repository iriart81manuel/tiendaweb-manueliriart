import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import CartContainer from './componentes/CartContainer/CartContainer'

function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Todos nuestros productos" />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} />
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
