import React, { useState } from 'react'
import "./ItemCount.css"


export const ItemCount = ({stock, initial, onAdd}) => {
  
  const [count, setCount] = useState(initial)

  const add = () =>{
    count < stock && setCount(count + 1)
  }
  const remove = () =>{
    count > initial && setCount(count - 1)
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