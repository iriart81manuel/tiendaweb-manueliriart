import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, category, img, price, stock, description }) => {
  const handleOnAdd = (quantity) => {
    console.log(`Se agregaron ${quantity} ${category} ${name}`);
  };

  return (
    <>
      <div className="container_item">
            <div className='card_container_item'>
                <img className='card_img_item' src={img} alt={name}/>
                <p className='letras_item'>{name} </p>
                <p className='letras_itemP'>$ {price} ars</p>
                <p className='letras_item'>Caracteristicas: {description}</p>
                <p className='letras_itemS'>STOCK DISPONIBLE: {stock}</p>
            </div>
           <p>Estas añadiendo de "{name}" al carrito</p> <ItemCount className='cartAdd' stock={stock} onAdd={handleOnAdd}/>
        </div>
    </>
  );
};

export default ItemDetail;
