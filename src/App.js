/* eslint-disable no-unused-vars */
import React from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom'
import Root from './components/Root/index'
import ContactsPage from './components/ContactsPage/index'
import AppointmentsPage from './components/AppointmentsPage/index'

const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root />}>
      <Route index element={ <Navigate to="/contacts" replace/>} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/appointments" element={<AppointmentsPage />} />
    </Route>
  ))

  return (
    // <RouterProvider router={router} />
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}

export default App

