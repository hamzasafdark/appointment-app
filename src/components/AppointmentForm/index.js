/* eslint-disable no-unused-vars */
import React ,{useState} from "react";

const AppointmentForm = () => {

    const [inputTitle, setInputTitle] = useState("");
    const [inputContact, setInputContact] = useState("");
    const [inputDate, setInputDate] = useState("");
    const [inputTime, setTime] = useState("")
 
    const handleTitleChange = (e) => {
        setInputTitle(e.target.value)
    }

    const handleContactChange = (e) => {
        setInputContact(e.target.value)
    }

    const handleDateChange = (e) => {
        setInputDate(e.target.value)
    }

    const handleTimeChange = (e) => {
        setTime(e.target.value)
    }

    return (
        <div>
            <form>
            <label>Title</label><br/>
            <input class='w-full h-8 outline-blue-500 outline-4' type="text" value={inputTitle} onChange={handleTitleChange} required/>
            <br />
            <label>Contact</label><br/>
            <input class='w-full h-8 outline-blue-500 outline-4' type="text" value={inputContact} onChange={handleContactChange} required />
            <br/>
            <label>Date</label><br/>
            <input class='w-full h-8 outline-blue-500 outline-4' type="text" value={inputDate} onChange={handleDateChange} required/>
            <br/>
            <label>Time</label><br/>
            <input class='w-full h-8 outline-blue-500 outline-4' type="text" value={inputTime} onChange={handleTimeChange} required/>

            <button class='my-5 px-4 h-12 rounded-full bg-purple-500'>Add Appointment</button>
           </form>
        </div>
        
    )
}

export default AppointmentForm