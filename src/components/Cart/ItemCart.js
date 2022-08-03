import React from 'react';
import AdderCart from './AdderCart'


export const ItemCart = ({item}) => {
  
  return (
    <div className='itemCart'>
      <img src={item.thumbnail} className='itemCartImg' alt={item.title} ></img>
      <div className='itemCartDetail'>
        <h1>{item.title}</h1>
        <p>${item.price} x {item.quantity} = {item.price * item.quantity}</p>
        <AdderCart item={item} quantity={item.quantity} key={item.id}/>
      </div>
    </div>
  )
}
