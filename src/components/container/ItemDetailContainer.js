import React from 'react'
import { ItemDetail } from './ItemDetail'
import { useState } from 'react'

export const ItemDetailContainer = ({item}) => {
  const [detail, setDetail] = useState(false)
  
  const show = (e) => {
    let element = e.target.parentElement.childNodes[0]
    console.log(e.target.parentElement.childNodes[0]
      )
    setDetail(!detail)
    console.log(detail)
    if(detail == true){    
      element.classList.remove('d-none')
      element.classList.remove('fadeOut')
      element.classList.add('show')
      element.classList.add('d-flex')
    }else{
      element.classList.remove('show')
      element.classList.add('fadeOut')
      setTimeout(()=>{
        element.classList.remove('d-flex')
        element.classList.add('d-none')
      },1000)
    }
      
  }

  return (
    <div className='itemDetailContainer'>
        <ItemDetail item={item}/>
        <button onClick={e => show(e,item.id)}>Ver detalles</button>
    </div>
  )
}
