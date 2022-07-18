import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


export const ItemDetail = ({item}) => {
  
  const onAdd = (cantidad) => {
    console.log("seleccionaste ", cantidad, " items")
  }
  
  console.log(item)
  return (
    <article className='itemDetail' key={item.id}>
      <img src={item.thumbnail} alt={item.title}></img>
      <h1>{item.title}</h1>
      <div className='itemDetailDescription'>
        <label className='category'>{item.category}</label>
        <label className='price'>${item.price}</label>
        <label className='description'>{item.description}</label>
      </div>

      <ItemCount stock={item.stock} price={item.price} initial='1'></ItemCount>
    </article>
  )
}

export default ItemDetail;
