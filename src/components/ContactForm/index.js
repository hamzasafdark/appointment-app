/* eslint-disable no-unused-vars */
import React , {useEffect, useState} from "react";

const ContactForm = (props) => {
    console.log(props)

    const [inputName, setInputName] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const [inputEmail, setInputEmail] = useState("");

    const handleNameChange = (e) => {
        setInputName(e.target.value)
    }

    const handlePhoneChange = (e) => {
        setInputPhone(e.target.value)
    }

    const handleEmailChange = (e) => {
        setInputEmail(e.target.value)
    }
    
    const handleSubmit = () => {
        console.log(props.contactsList)
    }

    // useEffect((props) => {
    //     const contact = {
    //         name: inputName,
    //         phone: inputPhone,
    //         email: inputEmail
    //     }
    
    //     props.updateContacts(contact)
    // }, [inputName, inputEmail, inputPhone])


    return (
        <div>
            <form>
            <label class='text-white'>Name</label><br/>
            <input class='w-full h-8 outline-blue-500 outline-4' type="text" value={inputName} onChange={handleNameChange} required/>
            <br />
            <label  class='text-white'>Phone</label><br/>
            <input class='w-full h-8 outline-blue-500 outline-4' type="text" value={inputPhone} onChange={handlePhoneChange} required />
            <br/>
            <label  class='text-white'>Email</label><br/>
            <input class='w-full h-8 outline-blue-500 outline-4' type="text" value={inputEmail} onChange={handleEmailChange} required/>
        
            <button class='my-5 px-4 h-12 rounded-full text-white bg-purple-900 hover:bg-purple-950' onSubmit={handleSubmit}>Add contact</button>
           </form>
        </div>
    )
}

export default ContactForm