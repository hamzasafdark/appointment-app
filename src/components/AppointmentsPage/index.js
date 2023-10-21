/* eslint-disable no-unused-vars */
import React from 'react'
import AppointmentForm from '../AppointmentForm'
import TileList from '../TileList'

const AppointmentsPage = () => {
    return (
        <div class='px-5 bg-purple-500'>
           <p class='text-white font-bold text-xl'>Add Appointment</p>
           <AppointmentForm />
           <TileList />
        </div>
    )
}

export default AppointmentsPage