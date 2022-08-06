/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { ItemCart } from "./ItemCart";
import "./Cart.css"
import { Link } from "react-router-dom";
import { collection, getFirestore, doc, getDoc, addDoc  } from "firebase/firestore";


export const Cart = () => {
  const {cart, clearCart}  = useContext(CartContext);
  const db = getFirestore();
  
  const calcutalteTotal = (array) =>{
    return array.map(item => item.price * item.quantity).reduce((prev, curre)=>  prev + curre, 0)
  }

  //! funcion para enviar datos
  const sendOrder = async () => {
    const person = {buyer:"Admin", email:"admin@gmail.com", phone:"61233333"}
    try {
      const docRef = await addDoc(collection(db, "orders"), {
        ...person, items : cart
    });
      console.log("Document written with ID: ", docRef.id)
      alert("Orden enviada correctamente, ID de orden: " + docRef.id)
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  
  return (
    <div className='cart'>
        {cart.length > 0 
        ? cart.map(item => <ItemCart item={item} key={item.id} />)
        : (<p className="msjError">Tu carrito esta vacio...</p>,
        <Link to='/' ><button className="cartBtn">Regresar al inicio</button></Link>
        )}
        <div className="btnContainer">
          <button className="cartBtn" onClick={()=>{clearCart()}}>Eliminar del carrito</button>
          <button className="cartBtn shop"onClick={()=>{sendOrder()}} >Confirmar compra</button>
        </div>
        <p className="CartTotal">Total a pagar: <label>${calcutalteTotal(cart)}</label></p>
    </div>
  )
};

