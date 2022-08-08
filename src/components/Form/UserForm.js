import React, {useState} from 'react'
import './UserForm.css'

export const UserForm = () => {
    const [person, setPerson] = useState({
        name:'',
        phone:'',
        email:''
    })

    const handleChange = (e) => {
        //this.setState({value: e.target.value});
        //console.log(e.target.name);
        e.target.name === 'name' && handleNameChange(e.target.value)
        e.target.name === 'phone' && handlePhoneChange(e.target.value)
        e.target.name === 'email' && handleEmailChange(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('A name was submitted: ' + JSON.stringify(person));
    }

    const handleNameChange = (name) =>{
        setPerson({...person, name: name}) 
    }

    const handlePhoneChange = (phone) =>{
        setPerson({...person, phone: phone})
    }

    const handleEmailChange = (email) =>{
        setPerson({...person, email: email})
    }

    return (
        <div className='UserFormContainer'>
            <form onSubmit={(e)=>handleSubmit(e)} className="personForm" autocomplete="off">
              <label>
                Name:
                <input type="text" name='name' value={person.name.value} onChange={(e)=>{handleChange(e)}} />
              </label>
              <label>
                Phone:
                <input type="tel" name='phone' value={person.phone.value} onChange={(e)=>{handleChange(e)}} />
              </label>
              <label>
                Email:
                <input type="email" name='email' value={person.email.value} onChange={(e)=>{handleChange(e)}} />
              </label>
              <input type="submit" value="Submit" />
            </form>

        </div>
    );
}
