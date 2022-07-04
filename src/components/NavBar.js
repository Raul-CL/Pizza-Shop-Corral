import React from 'react'
import icon from '../img/pizza-icon.png'

export const NavBar = () => {
  return (
    <header>
        <img src={icon} className='icon'></img>
        <navbar className='navbar'>
            <label>Home</label>
            <label>Menu</label>
            <label>Ordenar</label>
            <label>Ubicacion</label>
        </navbar>
    </header>
  )
}
