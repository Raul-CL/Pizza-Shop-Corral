import React, {useContext} from 'react'
import { CartContext } from "../../context/cartContext";
import './UserForm.css'


export const UserForm = () => {
    const {user, setUser, toast ,alertSuccess}  = useContext(CartContext)

    const handleChange = (e) => {
        e.target.name === 'name' && handleNameChange(e.target.value)
        e.target.name === 'phone' && handlePhoneChange(e.target.value)
        e.target.name === 'email' && handleEmailChange(e.target.value)
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();
      if(user.name.length > 3){
        if(user.phone.length === 10){
          if(user.email.length >5){
            setUser({...user, status: true}) 
            alertSuccess("Datos guardados correctamente","Ya puede realizar pedidos")
          }else{toast.fire({ icon: 'error',title: 'El email debe tener mas de 5 caracteres'})}
        }else{toast.fire({ icon: 'error',title: 'El telefono debe de tener 10 digitos'})}
      }else{toast.fire({ icon: 'error',title: 'El nombre debe tener mas de 3 caracteres'})}
                 
    }

    const handleNameChange = (name) =>{
        setUser({...user, name: name}) 
    }

    const handlePhoneChange = (phone) =>{
        setUser({...user, phone: phone})
    }

    const handleEmailChange = (email) =>{
        setUser({...user, email: email})
    }

    return (
        <div className='UserFormContainer'>
            <form onSubmit={(e)=>handleSubmit(e)} className="personForm" autoComplete='off'>
              <label>
                Name:
                <input type="text" name='name' value={user.name} onChange={(e)=>{handleChange(e)}} />
              </label>
              <label>
                Phone:
                <input type="tel" name='phone' value={user.phone} onChange={(e)=>{handleChange(e)}} />
              </label>
              <label>
                Email:
                <input type="email" name='email' value={user.email} onChange={(e)=>{handleChange(e)}} />
              </label>
              <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}
