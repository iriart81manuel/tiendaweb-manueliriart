import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/index";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    getDoc(doc(db, "products", productId))
      .then((response) => {
        const values = response.data();
        const product = { id: response.id, ...values };
        setProduct(product);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);
  if (loading) {
    return <h1>Cargando producto...</h1>;
    
  }

  return (
    <>
      <h1>Detalles 👇</h1>
      <ItemDetail {...product} />
    </>
  );
};

export default ItemDetailContainer;
