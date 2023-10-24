/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root from "./components/Root/index";
import ContactsPage from "./components/ContactsPage/index";
import AppointmentsPage from "./components/AppointmentsPage/index";
import axios from "axios";
const App = () => {
  const [contactsList, setContactList] = useState([]);
  const [appointmentsList, setAppointmentList] = useState([]);

  const updateContacts = ({ name, phone, email }) => {
    setContactList(contactsList.push({ name, phone, email }));
  };

  const updateAppointments = ({ title, contact, date, time }) => {
    setAppointmentList(appointmentsList.push({ title, contact, date, time }));
  };

  const handleAddContact = async (contactData) => {
    console.log(contactData); //accessing data of the props
    const payload = {
      name: contactData.name,
      phoneNumber: contactData.phone,
      email: contactData.email,
    };
    const response = await axios.post(
      "http://localhost:7000/contact/createcontact",
      payload
    );
    console.log(response);
  };

  const handleAddAppointment = async (appointmentData) => {
    console.log(appointmentData)
    const Payload = {
      title: appointmentData.title,
      contactName: appointmentData.contact,
      Date: appointmentData.date,
      Time: appointmentData.time,
    };
    const response = await axios.post(
      "http://localhost:7000/appointments/createAppointment",
      Payload
    );
  };

  useEffect(() => {
    axios
      .get("http://localhost:7000/contact/getallcontacts")
      .then((response) => {
        setContactList(response.data);
      });
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to="/contacts" replace />} />
        <Route
          path="/contacts"
          element={
            <ContactsPage
              contactLists={contactsList}
              updateContacts={updateContacts}
              onAddContact={handleAddContact}
            />
          }
        />
        <Route
          path="/appointments"
          element={
            <AppointmentsPage
              appointmentsList={appointmentsList}
              updateAppointments={updateAppointments}
              onAddAppointment={handleAddAppointment}
              contactLists={contactsList}
            />
          }
        />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
