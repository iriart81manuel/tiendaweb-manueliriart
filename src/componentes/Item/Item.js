import { Link } from "react-router-dom";
import "../ItemDetail/ItemDetail.css";

const Item = ({ id, name, img, price }) => {
  return (
    <article>
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
        {
          <picture>
            <img src={img} alt={name} />
          </picture>
        }
        <section>
          <p>Precio: ${price} ars</p>
        </section>
      </Link>
    </article>
  );
};

export default Item;
