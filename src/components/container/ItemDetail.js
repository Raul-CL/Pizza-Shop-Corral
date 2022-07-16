import React from 'react'

export const ItemDetail = ({item}) => {
  


  return (
    <article className='itemDetail show' key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <label>${item.price}</label>
    </article>
  )
}
