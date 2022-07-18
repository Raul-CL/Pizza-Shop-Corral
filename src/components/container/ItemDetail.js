import React from 'react'
import ItemCount from '../ItemCount'


export const ItemDetail = ({item}) => {
  
  const onAdd = (cantidad) => {
    console.log("seleccionaste ", cantidad, " items")
  }
  
  console.log(item)
  return (
    <article className='itemDetail show' key={item.id}>
      <img src={item.thumbnail} alt={item.title}></img>
      <h3>{item.title}</h3>
      <label>{item.category}</label>
      <label>{item.price}</label>
      <p>{item.description}</p>

      <ItemCount stock={item.stock} price={item.price}></ItemCount>
    </article>
  )
}

export default ItemDetail;
