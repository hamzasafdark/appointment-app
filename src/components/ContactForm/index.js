/* eslint-disable no-unused-vars */
import React , {useEffect, useState} from "react";

const ContactForm = (props) => {
    //console.log(props)

    const [contactData,setContactData] = useState(
         {
            name: "",
            phone: "",
            email: "",
          }
    );


    const handleInputChange = (event) => {
        const {name,value} = event.target;
        setContactData({...contactData,[name]:value}) // it stores the particular input field's value in that variable using the name att of the input field
    }

    const handleSubmit = (event) =>{
        event.preventDefault(); //prevents reloading page on event 
        props.postContact(contactData);  //props passed as a function with data in argument
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label class='text-white'>Name</label><br/>
            <input class='w-full h-8 outline-blue-500 outline-4 text-black' name="name" type="text" value={contactData.name} onChange={handleInputChange} required/>
            <br />
            <label  class='text-white'>Phone</label><br/>
            <input class='w-full h-8 outline-blue-500 outline-4 text-black' name="phone" type="text" value={contactData.phone} onChange={handleInputChange} required />
            <br/>
            <label  class='text-white'>Email</label><br/>
            <input class='w-full h-8 outline-blue-500 outline-4 text-black' name="email" type="text" value={contactData.email} onChange={handleInputChange} required/>
        
            <button class='my-5 px-4 h-12 rounded-full text-white bg-purple-900 hover:bg-purple-950' type="Submit">Add contact</button>
           </form>
        </div>
    )
}

export default ContactForm