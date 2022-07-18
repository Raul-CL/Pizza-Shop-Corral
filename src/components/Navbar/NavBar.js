import React from 'react'
import { CartWidget } from './CartWidget'
import "./Navbar.css"
import {Link, NavLink} from 'react-router-dom'

export const NavBar = () => {
  return (
    <header>
        <Link to='/'><img src='img/pizza-icon.png' alt='icon pizza' className='navIcon'></img></Link>
        <nav>
            <NavLink to='' className={({isActive})=>isActive? "linkActive" : "link"}>Home</NavLink>
            <NavLink to='' className={({isActive})=>isActive? "linkActive" : "link"}>Menu</NavLink>
            <NavLink to='' className={({isActive})=>isActive? "linkActive" : "link"}>Ordenar</NavLink>
            <NavLink to='' className={({isActive})=>isActive? "linkActive" : "link"}>Ubicacion</NavLink>
            <CartWidget/>
        </nav>
    </header>
  )
}
