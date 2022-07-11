import React from 'react'
import { ItemCount } from '../ItemCount'

export const Item = ({item}) => {
    console.log(item)
  return (
    <article className='itemContainer'>
        <img src={item.thumbnail} className='itemImg'></img>
        <div className='itemTextContainer'>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <label>${item.price}</label>
        </div>
        <ItemCount ></ItemCount>
    </article>
    
  )
}
