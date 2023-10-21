/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ContactForm from '../ContactForm';

const ContactsPage = () => {
    return (        
        <div class='px-5 bg-purple-500'>
           <p class='font-bold text-xl'>Add Contact</p>
           <ContactForm />
        </div>
    )
}

export default ContactsPage