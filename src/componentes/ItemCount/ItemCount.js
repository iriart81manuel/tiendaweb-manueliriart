import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const decrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const increment = () => {
    if (count < stock) {
      setCount((prev) => prev + 1);
    }
  };

  return (
    <div id="txt">
    <button> <h1>{count}</h1></button><br></br>
      <button onClick={decrement}>-</button> 
      <button onClick={increment}>+</button> <br></br>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
