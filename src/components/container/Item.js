import React from 'react'
import { Link } from 'react-router-dom'


export const Item = ({item}) => {
    //console.log(item)
  return (
    <article className='itemContainer '>
        <img src={item.thumbnail} className='itemImg'></img>
        <h3>{item.title}</h3>
        <Link to={`/item/${item.id}`}><button className='itemButton'>Ver detalles</button></Link>
    </article>
    
  )
}

