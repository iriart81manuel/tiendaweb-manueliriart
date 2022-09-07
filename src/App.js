import "./App.css";
import Navbar from "./componentes/Navbar/Navbar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import CartContainer from "./componentes/CartContainer/CartContainer";
import React, { useState, useEffect, } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <ClipLoader className="load" color="#44f5f5" loading={loading} size={120} />
      ) : (
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <ItemListContainer greeting="Todos nuestros productos" />
                }
              />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route
                path="/detail/:productId"
                element={<ItemDetailContainer />}
              />
              <Route path="/cart" element={<CartContainer />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      )}
    </div>
  );
}

export default App;
