import React, { useState, useContext } from 'react'
import "./ItemCount.css"
import { CartContext } from '../../context/cartContext';


export const ItemCount = ({stock, initial, onAdd}) => {
  
  const [count, setCount,] = useState(+initial)
  const { toast } = useContext(CartContext)

  const add = () =>{
    count < stock ? setCount(count + 1) : toast.fire({ icon: 'error',title: `El estock actual es de ${stock}`});
  }
  const remove = () =>{
    count > initial ? setCount(count - 1) : toast.fire({ icon: 'error',title: `No puedes agregar menos de ${initial}`});
  }

  return (
    <div className='itemCountContainer'>
        <button className='btnCount' onClick={()=>{remove()}}>-</button>
        <label>{count}</label>
        <button className='btnCount' onClick={()=>{add()}}>+</button>
        <button className='btnCount btnCountAdd' onClick={()=>{onAdd(count)}}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;