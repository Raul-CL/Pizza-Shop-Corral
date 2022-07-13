import React from 'react'
import { CartWidget } from './CartWidget'

export const NavBar = () => {
  return (
    <header className='container'>
        <img src='img/pizza-icon.png' alt='icon pizza' className='icon'></img>
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
