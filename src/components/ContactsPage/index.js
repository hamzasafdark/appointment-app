/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ContactForm from "../ContactForm";
import TileList from "../TileList";

const ContactsPage = (props) => {
  return (
    <div class="px-5 text-white bg-purple-500">
      <p class="py-6 font-bold text-xl">Add Contact</p>
      {/* // down here renaming my props or simply props drilling  */}
      <ContactForm
        postContact={(contactData) => props.onAddContact(contactData)}
      />
      <div class="h-screen">
        <p class="py-6 font-bold text-xl flex items-center justify-center">
          Contacts
        </p>
        <TileList contactLists={props.contactLists} />
      </div>
    </div>
  );
};

export default ContactsPage;
