/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom'
import Root from './components/Root/index'
import ContactsPage from './components/ContactsPage/index'
import AppointmentsPage from './components/AppointmentsPage/index'

const App = () => {
  const [contactsList, setContactList] = useState([]);
  const [appointmentsList, setAppointmentList] = useState([]);

  const updateContacts = ({name, phone, email}) => {
    setContactList(contactsList.push({name, phone, email}))
  }

  const updateAppointments = ({title, contact, date, time}) => {
    setAppointmentList(appointmentsList.push({title, contact, date, time}))
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root />}>
      <Route index element={ <Navigate to="/contacts" replace/>} />
      <Route path="/contacts" element={<ContactsPage contactsList={contactsList} updateContacts={updateContacts} />} />
      <Route path="/appointments" element={<AppointmentsPage appointmentsList={appointmentsList} updateAppointments={updateAppointments}/>} />
    </Route>
  ))

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

