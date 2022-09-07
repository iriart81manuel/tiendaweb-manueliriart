import { useContext } from "react";
import { Link } from "react-router-dom";
import "./CartWidget.css";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);
  const quantity = getQuantity();

  return (
    <Link to="/cart" className="CartWidget">
      <i className="bi bi-cart3"></i>
      <div id="qty">{quantity}</div>
    </Link>
  );
};

export default CartWidget;
