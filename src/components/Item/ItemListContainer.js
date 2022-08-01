/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import "./Item.css";
import { Loader } from "../Loader/Loader";
import { getDocs, getFirestore, collection, query, where} from "firebase/firestore";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();
  const db = getFirestore();

  useEffect(() => {
    let itemsCollection = "";
    category
      ? (itemsCollection = query(
          collection(db, "items"),
          where("category", "==", category)
        ))
      : (itemsCollection = collection(db, "items"));
    getDocs(itemsCollection)
      .then((response) => {
        response.size === 0
          ? setItems()
          : setItems(
              response.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            );
      })
      .then(() => {
        setLoading(false);
      });
  }, [category]);

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
