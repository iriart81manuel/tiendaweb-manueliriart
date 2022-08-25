import "./CartItem.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CartItem = ({ id, name, quantity, price, img }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemove = (id) => {
    removeItem(id);
  };

  return (
    <article className="carditem">
      <div className="cditem">
        <h3 className="itemname">{name}</h3>
        <p className="infoquantity">Cantidad: {quantity}</p>
        <p className="infoitemprice">Precio cada unidad ${price}</p>
        <p className="priceitem">Subtotal: $ {price * quantity}</p>
        <button className="ButtonCartItem" onClick={() => handleRemove(id)}> X </button>
        </div>
    </article>
  );
};

export default CartItem;
