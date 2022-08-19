import React,{useContext} from 'react'
import { CartWidget } from './CartWidget'
import "./Navbar.css"
import {Link, NavLink} from 'react-router-dom'
import { CartContext } from '../../context/cartContext'

export const NavBar = () => {
  const {user} = useContext(CartContext) 
  return (
    <header>
        <Link to='/' className='navIcon'><img src='/img/pizza-icon.jpg' alt='icon pizza' ></img></Link>
        <nav>
            <NavLink to="/category/Normal" className={({isActive})=>isActive? "linkActive" : "link"}>Carne</NavLink>
            <NavLink to="/category/Vegetarian" className={({isActive})=>isActive? "linkActive" : "link"}>Vegetarianas</NavLink>
            <NavLink to="/category/Calzone" className={({isActive})=>isActive? "linkActive" : "link"}>Calzone</NavLink>
            {user.status !== true 
            ? <NavLink to="/userForm"><i className="fa-solid fa-user-lock iconNav" style={{'color':'red'}}></i></NavLink>
            : <NavLink to="/userForm"><i className="fa-solid fa-user-check iconNav " style={{'color':'green'}}></i></NavLink>
            }
            <NavLink to="/cart"><CartWidget /></NavLink>
        </nav>
    </header>
  )
}
<i class=""></i>