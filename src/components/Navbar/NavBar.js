import React from 'react'
import { CartWidget } from './CartWidget'
import "./Navbar.css"
import {Link, NavLink} from 'react-router-dom'

//todo RENDERIZAR UN MENU CON PERFIL CUANDO SE LLENA EL FORMULARIO

export const NavBar = () => { 
  return (
    <header>
        <Link to='/' className='navIcon'><img src='/img/pizza-icon.jpg' alt='icon pizza' ></img></Link>
        <nav>
            <NavLink to="/category/Normal" className={({isActive})=>isActive? "linkActive" : "link"}>Carne</NavLink>
            <NavLink to="/category/Vegetarian" className={({isActive})=>isActive? "linkActive" : "link"}>Vegetarianas</NavLink>
            <NavLink to="/category/Calzone" className={({isActive})=>isActive? "linkActive" : "link"}>Calzone</NavLink>
            <NavLink to="/userForm" className={({isActive})=>isActive ?"linkActive" : "link"}>Form</NavLink>
            <NavLink to="/cart"><CartWidget /></NavLink>
        </nav>
    </header>
  )
}
