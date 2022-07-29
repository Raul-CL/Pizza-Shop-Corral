import React from 'react'
import { Item } from './Item'

export const ItemList = ({items}) => {
  console.log(items)
  return (
    <div className='itemList'>
        {items != null ? items.map((item) => (
            <Item item={item} key={item.id} />
        )): <p className='itemList_404'>Elementos no encontrados</p>}
    </div>
  )
}
