import React, {useContext}from 'react'
import { CartContext } from '../../context/cartContext';

const AdderCart = ({item,quantity}) => {
  const {plusToCart} = useContext(CartContext)

  return (
    <div className='adderContainer'>
       <button className='btnAdder' onClick={()=>{plusToCart(item,quantity+1)}}>+</button>
       <button className='btnAdder' onClick={()=>{plusToCart(item,quantity-1)}}>-</button>
    </div>
  )
}

export default AdderCart;
