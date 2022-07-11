import React from 'react'
import icon from '../img/pizza-icon.png'
import { CartWidget } from './CartWidget'

export const NavBar = () => {
  return (
    <header className='container'>
        <img src={icon} className='icon'></img>
        <nav className='navbar'>
            <label>Home</label>
            <label>Menu</label>
            <label>Ordenar</label>
            <label>Ubicacion</label>
            <CartWidget/>
        </nav>
    </header>
  )
}
