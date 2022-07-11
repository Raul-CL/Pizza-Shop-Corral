import React, { useEffect, useState } from 'react'
import {products} from '../container/Products'
import { ItemList } from './ItemList'


export const ItemListContainer = () => {
  const [items, setItems] = useState([])
  
  useEffect(()=>{
    const getItems = new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(products)
      },1)
    })
    getItems
      .then(data =>{
         //console.log(data)
         setItems(data)
      })
      .catch((error)=>{
        console.log(error)
      })
  },[])

  //console.log(items)
  return (  
    <section className='ItemListContainer container'>
    <ItemList items={items}></ItemList>
    </section>
    
  )
}

