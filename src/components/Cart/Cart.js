/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { ItemCart } from "./ItemCart";
import "./Cart.css"
import { Link } from "react-router-dom";
import { collection, getFirestore,/*  doc, getDoc, */ addDoc  } from "firebase/firestore";


export const Cart = () => {
  const {cart, clearCart,user}  = useContext(CartContext);

  const db = getFirestore();
  

  const calcutalteTotal = (array) =>{
    return array.map(item => item.price * item.quantity).reduce((prev, curre)=>  prev + curre, 0)
  }
  
  const createOrder = (cart) =>{
    let orderItems = []
    cart.map(item => orderItems.push({title:item.title, id:item.id, price:item.price, quantity: item.quantity}))
    return orderItems
  }
  
  //! funcion para enviar datos
  const sendOrder = async () => {
    const person = user   
    try {
      const docRef = await addDoc(collection(db, "orders"), {
        ...person, 
        items : createOrder(cart), 
        date: new Date(),
        total: calcutalteTotal(cart)
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
        : (<><p className="msjError">Tu carrito esta vacio...</p>
        <Link to='/' style={{"text-align":'center'}}><button className="cartBtn">Regresar al inicio</button></Link></>
        )}
        {cart.length > 0
        && (<div className="btnContainer">
        <button className="cartBtn" onClick={()=>{clearCart()}}>Eliminar del carrito</button>
        <button className="cartBtn shop"onClick={()=>{sendOrder()}} >Confirmar compra</button>
      </div>)
        }
        <p className="CartTotal">Total a pagar: <label>${calcutalteTotal(cart)}</label></p>
    </div>
  )
};

