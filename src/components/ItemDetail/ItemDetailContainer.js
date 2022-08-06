import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc  } from "firebase/firestore";

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

  

  return <ItemDetail item={items} />;
};

export default ItemDetailContainer;
