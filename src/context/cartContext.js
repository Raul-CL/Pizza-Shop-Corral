import { createContext } from "react";

export const CartContext = createContext()
//console.log(CartContext);

const Provider = (props) =>{
    return (
        <CartContext.Provider value={'Hola Mundo'}>
            {props.children}
        </CartContext.Provider>
    )
}

export default Provider;