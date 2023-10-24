/* eslint-disable no-unused-vars */
import React ,{useState} from "react";

const AppointmentForm = (props) => {

    const showContact = () => {
    const contacts = [];
    for(let element in props.contactLists)
    {
        contacts.push(props.contactLists[element].name)
    }
    console.log(contacts)
}

    const [appointmentData,setAppointmentData]=useState({
        title:"",
        contact:"",
        date:"",
        time:""
    })

    const handleAppointmentChange=(event)=>{
        const{name,value}=event.target
        setAppointmentData({...appointmentData,[name]:value})

    }

    const handleSubmitForm=(event)=>{
        event.preventDefault()
        props.submitFormData(appointmentData)


    }

  
    return (
        <div>
            <form onSubmit={handleSubmitForm}>
            <label  class='text-white'>Title</label><br/>
            <input class='w-full h-8 text-black outline-blue-500 outline-4' name="title" type="text" value={appointmentData.title} onChange={handleAppointmentChange} required/>
            <br />
            <label  class='text-white'>Choose Contact</label><br/>
            <input class='w-full h-8 outline-blue-500 outline-4' name="contact" type="text" value={appointmentData.contact} onClick={showContact} required />
             <br/>
            <label  class='text-white'>Date</label><br/>
            <input class='w-full h-8 outline-blue-500 outline-4' name="date" type="date" value={appointmentData.date} onChange={handleAppointmentChange} required/>
            <br/>
            <label  class='text-white'>Time</label><br/>
            <input class='w-full h-8 outline-blue-500 outline-4' name="time" type="time" value={appointmentData.time} onChange={handleAppointmentChange} required/>
            <button class='my-5 px-4 h-12 rounded-full text-white bg-purple-900 hover:bg-purple-950' type="submit">Add Appointment</button>
           </form>
        </div>
        
    )
}

export default AppointmentForm