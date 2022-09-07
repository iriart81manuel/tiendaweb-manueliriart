import "./Form.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
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
import { db } from "../../services/firebase/index";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Form = () => {
  const MySwal = Swal;
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cel, setCel] = useState("");

  const { cart, getFinalPrice, resetCart } = useContext(CartContext);
  const total = getFinalPrice();

  const onSubmit = async () => {
    try {
      if (!name || !email || !cel) {
        MySwal.fire({
          title: "Todos los datos son necesarios para la orden!",
          background: "#353535",
          color: "#fff",
          icon: "error",
        });
      } else {
        if (cart.length > 0) {
          const celNumber = parseInt(cel);
          const dbRef = collection(db, "products");
          const ordersRef = collection(db, "orders");
          const cartIds = cart.map((product) => product.id);
          const noStock = [];
          const myBatch = writeBatch(db);
          const clientInfo = {
            client: {
              name: name,
              email: email,
              phone: celNumber,
            },
            items: cart,
            total,
            date: Timestamp.fromDate(new Date()),
          };

          const productsInCart = await getDocs(
            query(dbRef, where(documentId(), "in", cartIds))
          );
          const { docs } = productsInCart;
          docs.forEach((product) => {
            const data = product.data();
            const dbStock = data.stock;

            const products = cart.find((doc) => doc.id === product.id);
            const productsQuantity = products?.quantity;

            if (dbStock >= productsQuantity) {
              myBatch.update(product.ref, {
                stock: dbStock - productsQuantity,
              });
            } else {
              noStock.push({ id: product.id, ...data });
            }
          });
          if (noStock.length === 0) {
            const addOrder = await addDoc(ordersRef, clientInfo);
            const idOrder = addOrder.id;
            myBatch.commit();
            MySwal.fire({
              title:
                "Muchas Gracias por tu Compra! El token de tu compra es " +
                idOrder,
              icon: "success",
              text: "Te eviaremos un WhatsApp al número para coordinar la entrega y el pago",
              background: "#353535",
              color: "#FFF",
            });
            setName("");
            setEmail("");
            setCel("");
            resetCart();
            navigate("/", { replace: true });
          } else {
            MySwal.fire({
              title: "Error! Uno de los productos está fuera de Stock",
              icon: "warning",
              background: "#353535",
              color: "#FFF",
            });
          }
        } else {
          MySwal.fire({
            title: "Tu carrito esta vacio!",
            icon: "question",
            text: "Volve a la tienda para sumar otro producto",
            background: "#353535",
            color: "#fff",
          });
        }
      }
    } catch (error) {
      MySwal.fire({
        title: error,
        icon: "error",
        background: "#353535",
        color: "#FFFFF",
      });
    }
  };

  return (
    <div>
      <h1 className="formTitle">¡Generá tu orden de Compra!</h1>
      <div className="form">
        <form>
          <div className="form">
            <label htmlFor="name" className="formLabel">
              Nombre 
            </label>
            <input
              type="text"
              id="name"
              className="formInput"
              required="text"
              value={name}
              onInput={(evt) => setName(evt.target.value)}
            />
          </div>
          <div className="form">
            <label htmlFor="email" className="formQ">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="formInput"
              required="email"
              value={email}
              onInput={(evt) => setEmail(evt.target.value)}
            />
          </div>
          <div className="form">
            <label htmlFor="phone" className="formLabel">
              WhatsApp
            </label>
            <input
              type="phone"
              id="phone"
              className="formInput"
              required="tel"
              value={cel}
              onInput={(evt) => setCel(evt.target.value)}
            />
          </div>
          <div>
           
            <button>
              {" "}
              <Link to="/cart" className="formBtn">
              👈   Regresar al carrito 
              </Link>
            </button>
            <button
              className="formBtn"
              type="button"
              value="Submit"
              onClick={onSubmit}
            >
              Finalizar pedido 👉
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
