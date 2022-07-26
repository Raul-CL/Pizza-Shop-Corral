import React, { useEffect, useState } from 'react'
import ItemDetail from "./ItemDetail";
import {products} from '../data/Products'
import {useParams} from 'react-router-dom'
import "./ItemDetail.css"

export const ItemDetailContainer = () => {
  const [items, setItems] = useState([])
  const {id} = useParams()
  
  useEffect(() => {
    const getItemsById = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(products.find(product => product.id === +id))          
        }, 1)
      })
    }
    getItemsById()

    .then(response => {
      setItems(response)
    })
    //eslint-disable-next-line
  },[id])

  return (
    <ItemDetail item={items}/>    
  )
}

export default ItemDetailContainer;