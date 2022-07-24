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
          //console.log(products)
        }, 1)
      })
    }

    getItemsById()

    .then(response => {
      console.log(response)
      setItems(response)
      console.log(items)
    })
    //eslint-disable-next-line
  },[id])

  return (
    <ItemDetail item={items}/>    
  )
}

export default ItemDetailContainer;