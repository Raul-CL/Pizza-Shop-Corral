import './Loader.css'
import React from 'react'

export const Loader = () => {
  return (
    <div className='LoaderContainer'>
        <div className="lds-ripple"><div></div><div></div></div>
        <p className='loaderText'>Cargando productos...</p>
        
    </div>
  )
}
