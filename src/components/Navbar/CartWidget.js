import React, {useContext} from 'react'
import { CartContext } from '../../context/cartContext'


export const CartWidget = () => {
  const {cart}  = useContext(CartContext);
  
  return (
    <label style={cart.length > 0 ? {'display': 'inline'} : {'display' : 'none'}}><i className="fa-solid fa-cart-shopping iconCar"> {cart.length}</i></label>
  )
}
