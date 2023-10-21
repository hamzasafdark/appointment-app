/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const ContactsPage = () => {
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
           <p class='font-normal'>Add Contact</p>
           <form>
            <label>Name</label><br/>
            <input type="text" value={inputName} onChange={handleNameChange} />
            <br />
            <label>Phone</label><br/>
            <input type="text" value={inputPhone} onChange={handlePhoneChange} />
            <br/>
            <label>Email</label><br/>
            <input type="text" value={inputEmail} onChange={handleEmailChange} />

           </form>
        </div>
    )
}

export default ContactsPage