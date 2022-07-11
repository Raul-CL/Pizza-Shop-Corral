import React, { useState } from 'react'


export const ItemCount = () => {

  const [counter, setCounter] = useState(0)
  
    const count = (value) =>{
        setCounter(counter + value)
    }
    
  return (
    <div className='itemCountContainer'>
        <button className='btnCount' onClick={e =>{count(-1)}}>-</button>
        <label>{counter}</label>
        <button className='btnCount' onClick={e =>{count(1)}}>+</button>
    </div>
  )
}
