import React, { useEffect, useState } from "react";
//import {products} from '../data/Products'
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import "./Item.css";
import { Loader } from "../Loader/Loader";
import { getDocs, getFirestore, collection, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    let itemsCollection =''
    category
    ? itemsCollection = query(collection(db, "items"), where("category", "==", category))
    : itemsCollection = collection(db, "items")
    getDocs(itemsCollection).then((response) => {
      response.size === 0 
      ? setItems()
      : setItems(response.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    })
    .then(()=>{setLoading(false)})
    
  }, [category]);

  //console.log(items)
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="itemListContainer">
          <ItemList items={items}></ItemList>
        </section>
      )}
    </>
  );
};
