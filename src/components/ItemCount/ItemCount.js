import React, { useState } from 'react'
import "./ItemCount.css"

export const ItemCount = ({stock,initial}) => {

  const [counter, setCounter] = useState(initial)
  
  const plus = e =>{
    console.log(counter)  
    counter < stock 
    ? setCounter(counter +1)
    : console.log("Esto insuficiente... lo sentimos")
  }
  
  const less = e =>{
    //console.log(e)  
    counter > 1 && setCounter(counter -1)
    
  }
    
  return (
    <div className='itemCountContainer'>
        <button className='btnCount' onClick={e =>{less(e)}}>-</button>
        <label>{counter}</label>
        <button className='btnCount' onClick={e =>{plus(e)}}>+</button>
    </div>
  )
}

export default ItemCount;