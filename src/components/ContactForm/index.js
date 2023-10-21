/* eslint-disable no-unused-vars */
import React ,{useState} from "react";

const ContactForm = () => {

    const [inputName, setInputName] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const [inputEmail, setInputEmail] = useState("");

    const handleNameChange = (e) => {
        setInputName(e.target.value)
    }

    const handlePhoneChange = (e) => {
        setInputName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setInputName(e.target.value)
    }

    return (
        <div>
            <form>
            <label>Name</label><br/>
            <input class='w-full h-8 outline-blue-500 outline-4' type="text" value={inputName} onChange={handleNameChange} required/>
            <br />
            <label>Phone</label><br/>
            <input class='w-full h-8 outline-blue-500 outline-4' type="text" value={inputPhone} onChange={handlePhoneChange} required />
            <br/>
            <label>Email</label><br/>
            <input class='w-full h-8 outline-blue-500 outline-4' type="text" value={inputEmail} onChange={handleEmailChange} required/>
           
            <button class='my-5 px-4 h-12 rounded-full bg-purple-500'>Add contact</button>
           </form>
        </div>
        
    )
}

export default ContactForm