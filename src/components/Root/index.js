/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet, NavLink } from "react-router-dom"

const Root = () => {
    return (
        <>
            <nav class='px-4 py-4 bg-purple-900 text-white flex space-x-12'>
                <NavLink to="/contacts">
                        Contacts
                </NavLink>
                <NavLink to="/appointments">
                    Appointments
                </NavLink>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Root