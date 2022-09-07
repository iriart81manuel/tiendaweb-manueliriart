import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {
  addDoc,
  collection,
  getDocs,
  Timestamp,
  query,
  where,
  documentId,
  writeBatch,
} from "firebase/firestore";
import { dataBase } from "../../services/firebase";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners/ClipLoader";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunction = categoryId ? getProductsByCategory : getProducts;

    asyncFunction(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
}
  return (
    <>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
