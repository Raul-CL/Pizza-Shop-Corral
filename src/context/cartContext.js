import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();
//console.log(CartContext);

const Provider = (props) => {
  //const [cart, setCart] = useState([]);
  //testeo de objetos cart
  const [cart, setCart] = useState([
    {
        id: 1,
        title:"Diavola Peperoni",
        description:"Tradicional pizza italiana",
        thumbnail:'/img/diavola_pepperoni.jpg',
        price:89,
        quantity: 5,
        stock: 5,
        category: "Normal"
    },
    {
        id: 2,
        title:"Caprese Margarita",
        description:"Deliciosa con albahaca, jitomate y aceite de oliva",
        thumbnail:'/img/caprese_margarita.jpg',
        price:89,
        quantity: 5,
        stock: 5,
        category: "Vegetarian"
    },
  ]);

  useEffect(() => {
    //console.log(cart);
  }, [cart]);

  const addToCart = (item, quantity) => {
    if(isInCart(item.id)){
       removeItem(item,quantity)
       //console.log(cart);
    }else{
      setCart([...cart, { ...item, quantity }])
      //console.log(cart);
    }
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id)
  };

  const removeItem = (item,quantity) =>{
    cart.forEach((obj, index) =>{
        obj.id === item.id && setCart(cart.splice(index,1))
    })
    addToCart(item,quantity)
  }

  const clearCart = ()=>{
    setCart([])
  }


  return (
    <CartContext.Provider value={{ cart, addToCart,clearCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default Provider;
