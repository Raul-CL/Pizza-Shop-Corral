import React from 'react'
import { CartWidget } from './CartWidget'
import "./Navbar.css"
import {Link, NavLink} from 'react-router-dom'

export const NavBar = () => {
  return (
    <header>
        <Link to='/' className='navIcon'><img src='img/pizza-icon.jpg' alt='icon pizza' ></img></Link>
        <nav>
            <NavLink to="/category/Normal" className={({isActive})=>isActive? "linkActive" : "link"}>Carne</NavLink>
            <NavLink to="/category/Vegetarian" className={({isActive})=>isActive? "linkActive" : "link"}>Vegetarianas</NavLink>
            <CartWidget/>
        </nav>
    </header>
  )
}
