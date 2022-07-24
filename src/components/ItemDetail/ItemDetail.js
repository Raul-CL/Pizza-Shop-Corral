import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'


export const ItemDetail = ({item}) => {
    
  const onAdd = (number) => {
    console.log("tienes "+number+" elementos")
  }
  
  return (
    <article className='itemDetail' key={item.id}>
      <img src={item.thumbnail} alt={item.title}></img>
      <h1>{item.title}</h1>
      <div className='itemDetailDescription'>
        <label className='category'>{item.category}</label>
        <label className='price'>${item.price}</label>
        <label className='description'>{item.description}</label>
      </div>

      <ItemCount stock={item.stock} initial='1' onAdd={onAdd} ></ItemCount>
      
    </article>
  )
}

export default ItemDetail;
