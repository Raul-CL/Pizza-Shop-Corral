import React, { useEffect, useState } from 'react'
import ItemDetail from "./ItemDetail";
//import {products} from '../data/Products'
import {useParams} from 'react-router-dom'
import { getDocs, getFirestore, collection, where, query, doc, getDoc, exists} from "firebase/firestore";
import "./ItemDetail.css"

export const ItemDetailContainer = () => {
  const [items, setItems] = useState([])
  const {id} = useParams()
  
  useEffect(() => {
    const db = getFirestore();
    /* const getItemsById = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(products.find(product => product.id === +id))          
        }, 1)
      })
    }
    getItemsById()

    .then(response => {
      setItems(response)
    }) */

    const docRef = doc(db, "items", id);
    getDoc(docRef)
    .then((doc) => {
      console.log({'id': doc.id, ...doc.data()})
      setItems({id: doc.id, ...doc.data()});
    }) 
    
    //eslint-disable-next-line
  },[id])

  return (
    <ItemDetail item={items}/>    
  )
}

export default ItemDetailContainer;