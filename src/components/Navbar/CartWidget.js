import React, {useContext} from 'react'
import { CartContext } from '../../context/cartContext'


export const CartWidget = () => {
  const {cart}  = useContext(CartContext);
  
  return (
    <label style={cart.length > 0 ? {'display': 'inline'} : {'display' : 'none'}}><i className="fa-solid fa-cart-shopping iconNav inconNumber"><sup style={{'color':'green'}}> {cart.length}</sup></i></label>
  )
}
