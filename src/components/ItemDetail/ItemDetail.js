/* eslint-disable no-undef */
import React, { useContext , useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/cartContext';


export const ItemDetail = ({item}) => {
  const [quantity, setQuantity] = useState(0)
   const {addToCart} = useContext(CartContext)
    
  const onAdd = (number) => {
    setQuantity(number);
    addToCart(item, number);
    
  }
  
  return (
    <article className='itemDetail' key={item.id}>
      <img src={item.thumbnail} alt={item.title}></img>
      <h1>{item.title}</h1>
      <div className='itemDetailDescription'>
        <label className='category'>{item.category}</label>
        <label className='price'>${item.price}</label>
        <label className='description'>{item.description}</label>
      </div>

      <ItemCount stock={item.stock} initial='1' onAdd={onAdd} ></ItemCount>
      
    </article>
  )
}

export default ItemDetail;
