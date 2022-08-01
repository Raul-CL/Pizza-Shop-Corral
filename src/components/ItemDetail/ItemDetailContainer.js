import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { collection, getFirestore, doc, getDoc, addDoc  } from "firebase/firestore";

import "./ItemDetail.css";

export const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();
  const db = getFirestore();

  useEffect(() => {
    const docRef = doc(db, "items", id);
    getDoc(docRef).then((doc) => {
      setItems({ id: doc.id, ...doc.data() });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  //! funcion para enviar datos
  const sendDoc = async () => {
    console.log("hola");
    try {
      const docRef = await addDoc(collection(db, "items"), {
        title:"Calzone Pepperoni",
        description:"Te van a encantar, relleno fruta y queso philadelphia. Elige tu sabor.",
        thumbnail:'/img/calzone_peperoni.jpg',
        price:25,
        stock:5,
        category: "Calzone"
    });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return <ItemDetail item={items} sendDoc={sendDoc} />;
};

export default ItemDetailContainer;
