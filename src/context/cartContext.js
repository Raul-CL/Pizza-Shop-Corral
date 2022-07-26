import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();
//console.log(CartContext);

const Provider = (props) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const addToCart = (item, quantity) => {
    if(isInCart(item.id)){
       changeQuantity(item,quantity)
       console.log(cart);
    }else{
      setCart([...cart, { ...item, quantity }])
      console.log(cart);
    }
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id)
  };

  const changeQuantity = (item,quantity) =>{
    cart.forEach((obj, index) =>{
        obj.id === item.id && setCart(cart.splice(index,1))
    })
    addToCart(item,quantity)
  }


  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default Provider;
