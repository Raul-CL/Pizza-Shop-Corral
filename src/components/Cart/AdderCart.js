import React, {useContext}from 'react'
import { CartContext } from '../../context/cartContext';

const AdderCart = ({item,quantity}) => {
  const {plusToCart, toast} = useContext(CartContext)
  return (
    <div className='adderContainer'>
       <button className='btnAdder' onClick={()=>{plusToCart(item,quantity-1)}}>-</button>
      <button className='btnAdder' onClick={()=>{item.stock > quantity ?plusToCart(item,quantity+1) : toast.fire({ icon: 'error',title: `El estock actual es de ${item.stock}`})}}>+</button>
    </div>
  )
}

export default AdderCart;
