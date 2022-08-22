import React from 'react'
import { Link } from 'react-router-dom'



export const Item = ({item}) => {
    console.log(item.thumbnail)
  return (
    <article className='itemContainer '>
        <img src={item.thumbnail} alt={item.title} className='itemImg'></img>
        <h1>{item.title}</h1>
        <Link to={`/item/${item.id}`}><button className='itemButton'>Ver detalles</button></Link>
    </article>
    
    
  )
}

