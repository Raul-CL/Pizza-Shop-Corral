import React from 'react'
import { CartWidget } from './CartWidget'
import "./Navbar.css"
import {Link, NavLink} from 'react-router-dom'

export const NavBar = () => {
  return (
    <header>
        <Link to='/'><img src='img/pizza-icon.png' alt='icon pizza' className='navIcon'></img></Link>
        <nav>
            <NavLink to="/category/Normal" className={({isActive})=>isActive? "linkActive" : "link"}>Carne</NavLink>
            <NavLink to="/category/Vegetarian" className={({isActive})=>isActive? "linkActive" : "link"}>Vegetarianas</NavLink>
            <CartWidget/>
        </nav>
    </header>
  )
}
