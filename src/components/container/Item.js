import React from 'react'
import { ItemCount } from '../ItemCount'
import { ItemDetailContainer } from './ItemDetailContainer'

export const Item = ({item}) => {
    //console.log(item)
  return (
    <article className='itemContainer '>
        <img src={item.thumbnail} className='itemImg'></img>
        <ItemDetailContainer item={item}/>
        <ItemCount stock={item.stock} initial={1} ></ItemCount>
    </article>
    
  )
}

