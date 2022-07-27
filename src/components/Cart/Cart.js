/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { ItemCart } from "./ItemCart";
import "./Cart.css"

export const Cart = () => {
  const {cart, clearCart}  = useContext(CartContext);

  return (
    <div className='cart'>
        {cart.length > 0 
        ? cart.map(item => <ItemCart item={item} key={item.id} />)
        : <p className="msjError">El carrito esta vacio...</p>}
        <button className="cartCleartBtn" onClick={()=>{clearCart()}}>Eliminar del carrito</button>
    </div>
  )
};


