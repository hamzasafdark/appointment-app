/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom'
import Root from './components/Root/index'
import ContactsPage from './components/ContactsPage/index'
import AppointmentsPage from './components/AppointmentsPage/index'

const App = () => {
  const [contactsList, setContactList] = useState({});
  const [appointmentsList, setAppointmentList] = useState({});

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root />}>
      <Route index element={ <Navigate to="/contacts" replace/>} />
      <Route path="/contacts" element={<ContactsPage contactsList={contactsList} setContactList={setContactList} />} />
      <Route path="/appointments" element={<AppointmentsPage appointmentsList={appointmentsList} setAppointmentList={setAppointmentList}/>} />
    </Route>
  ))

  return (
    // <RouterProvider router={router} />
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

