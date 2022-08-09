import "./ItemDetail.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantity, setQuantity] = useState(0);

  const { addItem, getProductQuantity } = useContext(CartContext);

  const quantityAdded = getProductQuantity(id);

  const handleOnAdd = (quantity) => {
    console.log("agregue al carrito");
    console.log(quantity);
    setQuantity(quantity);
    addItem({ id, name, price, quantity });
  };

  return (
    <article>
      <div className="container_item">
        <div className="card_container_item">
          <img className="card_img_item" src={img} alt={name} />
          <p className="letras_item">{name} </p>
          <p className="letras_itemP">$ {price} ars</p>
          <p className="letras_item">Caracteristicas: {description}</p>
          <p className="letras_itemS">STOCK DISPONIBLE: {stock}</p>
        </div>
        <p>Estas añadiendo de "{name}" al carrito</p>{" "}
        <ItemCount className="cartAdd" stock={stock} onAdd={handleOnAdd} />
      </div>

      <footer className="ItemFooter">
        {quantity > 0 ? (
          <Link to="/cart" className="Option">
            Finalizar compra
          </Link>
        ) : (
          <ItemCount
            stock={stock}
            onAdd={handleOnAdd}
            initial={quantityAdded}
          />
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;
