/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ContactForm from '../ContactForm';
import TileList from '../TileList';

const ContactsPage = (props) => {
    return (        
        <div class='px-5 text-white bg-purple-500'>
           <p class='py-6 font-bold text-xl'>Add Contact</p>
           <ContactForm contactsList={props.contactsList} updateContacts={props.updateContacts} />
           <div class='h-screen'>
            <p class='py-6 font-bold text-xl flex items-center justify-center'>Contacts</p>
            <TileList />
           </div>
        </div>
    )
}

export default ContactsPage