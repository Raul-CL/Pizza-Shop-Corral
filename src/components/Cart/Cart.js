/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export const Cart = () => {
  const { cart } = useContext(CartContext);

  cart.map((item) => {
    console.log(item)
    console.log(item.thumbnail)
    console.log(item.title)
    console.log(item.price)
    console.log(item.quantity)
    
  })
  return (
    <div className='itemCart'>
        {cart.length > 0 ? cart.map((item) => (
            <itemCart item={item} key={item.id} />
        )): "Error al cargar elemento"}
    </div>
  )
};


