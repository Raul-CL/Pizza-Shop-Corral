import React, {useContext}from 'react'
import { CartContext } from '../../context/cartContext';

const AdderCart = ({item,quantity}) => {
  const {addToCart} = useContext(CartContext)
  return (
    <div className='adderContainer'>
       <button onClick={()=>{addToCart(item,quantity+1)}}>+</button>
       <button onClick={()=>{addToCart(item,quantity-1)}}>-</button>
    </div>
  )
}

export default AdderCart;