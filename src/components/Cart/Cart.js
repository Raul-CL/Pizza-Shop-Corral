/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { ItemCart } from "./ItemCart";
import "./Cart.css"
import { Link } from "react-router-dom";

export const Cart = () => {
  const {cart, clearCart}  = useContext(CartContext);
  
  const calcutalteTotal = (array) =>{
    return array.map(item => item.price * item.quantity).reduce((prev, curre)=>  prev + curre, 0)
  }


  
  return (
    <div className='cart'>
        {cart.length > 0 
        ? cart.map(item => <ItemCart item={item} key={item.id} />)
        : (<p className="msjError">Tu carrito esta vacio...</p>,
        <Link to='/' ><button className="cartCleartBtn">Regresar al inicio.</button></Link>
        )}
        <button className="cartCleartBtn" onClick={()=>{clearCart()}}>Eliminar del carrito</button>
        <p className="CartTotal">Total a pagar: <label>${calcutalteTotal(cart)}</label></p>
    </div>
  )
};
