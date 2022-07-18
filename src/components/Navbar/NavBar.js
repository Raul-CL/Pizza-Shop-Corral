import React from 'react'
import { CartWidget } from './CartWidget'
import {Link, NavLink} from 'react-router-dom'

export const NavBar = () => {
  return (
    <header className='container'>
        <Link to='/'><img src='img/pizza-icon.png' alt='icon pizza' className='icon'></img></Link>
        <nav className='navbar'>
            <Link to='' className='link'>Home</Link>
            <Link to='' className='link'>Menu</Link>
            <Link to='' className='link'>Ordenar</Link>
            <Link to='' className='link'>Ubicacion</Link>
            <CartWidget/>
        </nav>
    </header>
  )
}
