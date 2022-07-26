import React, { useEffect, useState } from 'react'
import {products} from '../data/Products'
import { ItemList } from './ItemList'
import { useParams } from "react-router-dom";
import "./Item.css"
import { Loader } from '../Loader/Loader';


export const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true);
  const { category } = useParams()



  useEffect(() => {
    const getItems = () => {
      return new Promise(resolve => {
        setLoading(true)
        setTimeout(() => {
          resolve(
            category 
            ? products.filter(product => product.category === category) 
            : products
          )
        }, 1)
      })
    }
    
    getItems()
    .then(response =>{
      setItems(response)
      setLoading(false)
    })  
  }, [category])
  

  //console.log(items)
  return (  
    <>{
      loading ? <Loader/>
      : <section className='itemListContainer'>
      <ItemList items={items}></ItemList>
    </section>
    }</>
    
  )
}

