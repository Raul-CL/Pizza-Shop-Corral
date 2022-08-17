import React, {useContext} from 'react'
import { CartContext } from "../../context/cartContext";
import './UserForm.css'


export const UserForm = () => {
    const {user, setUser}  = useContext(CartContext)

    const handleChange = (e) => {
        e.target.name === 'name' && handleNameChange(e.target.value)
        e.target.name === 'phone' && handlePhoneChange(e.target.value)
        e.target.name === 'email' && handleEmailChange(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(user);
        if(user.name.length >= 3 && user.phone.length === 10 && user.email.length >= 3){
          setUser({...user, status: true}) 
        }
        //alert('A name was submitted: ' + JSON.stringify(user))        
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
            <form onSubmit={(e)=>handleSubmit(e)} className="personForm" >
              <label>
                Name:
                <input type="text" name='name' value={user.name.value} onChange={(e)=>{handleChange(e)}} autoComplete="off"/>
              </label>
              <label>
                Phone:
                <input type="tel" name='phone' value={user.phone.value} onChange={(e)=>{handleChange(e)}} autoComplete="off"/>
              </label>
              <label>
                Email:
                <input type="email" name='email' value={user.email.value} onChange={(e)=>{handleChange(e)}} autoComplete="off"/>
              </label>
              <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}
