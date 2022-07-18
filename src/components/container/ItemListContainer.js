import React, { useEffect, useState } from 'react'
import {products} from '../container/Products'
import { ItemList } from './ItemList'
import { useParams } from "react-router-dom";


export const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true);
  const { category } = useParams()

  const getItems = () => {
    return new Promise(resolve => {
      setLoading(true)
      setTimeout(() => {
        resolve(
          category 
          ? products.filter(product => product.category === category) 
          : products          
        )
        console.log('cargada')
      }, 1)
    })
  }

  useEffect(() => {
    getItems()
    .then(response =>{
      setItems(response)
      setLoading(false)
    })
  
  }, [category])
  

  //console.log(items)
  return (  
    <section className='itemListContainer'>
    <ItemList items={items}></ItemList>
    </section>
    
  )
}

