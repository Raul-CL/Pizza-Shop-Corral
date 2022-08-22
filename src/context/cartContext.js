import { createContext, useState, useEffect } from "react";
import Swal from 'sweetalert2'

export const CartContext = createContext();

const Provider = (props) => {
  const [cart, setCart] = useState([
  ]);

  useEffect(() => {
    
  }, [cart]);

  const addToCart = (item, quantity) => {
    if(isInCart(item.id)){
       addItem(item,quantity)
    }else{
      setCart([...cart, { ...item, quantity }])
    }
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id)
  };

  const addItem = (item,quantity) =>{
    const newCart = cart.filter((product) => product.id !== item.id)
    setCart([...newCart,{...item,quantity}])
  }  

  const clearCart = ()=>{
    setCart([])
  }

  const [user,setUser] = useState({
    name:'',
    phone:'',
    email:''
  })

  const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    background:"#262626",
    color:"#cacaca",
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const alertSuccess = (title,text) =>{
    Swal.fire({
      icon: 'success',
      title: title,
      text: text,
      showConfirmButton: false,
      timer: 3000,
      background:"#262626",
      color:"#cacaca",
    })
  }


  const plusToCart = (item,quantity) =>{
    if(quantity <= 0){
      const newCart = cart.filter((product) => product.id !== item.id)
      setCart(newCart)
      toast.fire({ icon: 'error',title: `Se elimino ${item.title}`})
    }else{
      const newCart = cart.map(product =>{
        if (item.id === product.id){
          return {...product, quantity: quantity}
        } else {
          return product
        }
      })
      setCart(newCart)
    }

  }

  return (
    <CartContext.Provider value={{ cart, addToCart,clearCart,plusToCart,user,setUser, toast , alertSuccess}}>
      {props.children}
    </CartContext.Provider>
  );
};

export default Provider;
