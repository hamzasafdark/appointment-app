/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ContactForm from '../ContactForm';
import TileList from '../TileList';

const ContactsPage = () => {
    return (        
        <div class='px-5 bg-purple-500'>
           <p class='font-bold text-xl'>Add Contact</p>
           <ContactForm />
           <TileList />
        </div>
    )
}

export default ContactsPage