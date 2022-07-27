import React from 'react'

export const ItemCart = ({item}) => {
  console.log(item)
  return (
    <div className='itemCart'>
      <img src={item.thumbnail} className='itemCartImg' alt={item.title} ></img>
      <div className='itemCartDetail'>
        <h1>{item.title}</h1>
        <p>${item.price} x {item.quantity} = {item.price * item.quantity}</p>
      </div>
    </div>
  )
}
