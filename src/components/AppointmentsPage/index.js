/* eslint-disable no-unused-vars */
import React from 'react'
import AppointmentForm from '../AppointmentForm'
import TileList from '../TileList'

const AppointmentsPage = (props) => {
    return (
        <div class='px-5 bg-purple-500'>
           <p class='py-6 text-white font-bold text-xl'>Add Appointment</p>
           <AppointmentForm appointmentsList={props.appointmentsList} updateAppointments={props.updateAppointments}/>
           <div class='h-screen'>
            <p class='text-white py-6 font-bold text-xl flex items-center justify-center'>Appointments</p>
            <TileList />
           </div>
        </div>
    )
}

export default AppointmentsPage