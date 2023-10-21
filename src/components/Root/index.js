import React from "react";
import { Outlet, NavLink } from "react-router-dom"

const Root = () => {
    return (
        <>
            <nav class='px-4 py-4 bg-purple-900 text-white flex space-x-4'>
                <NavLink class='font-mono' to="/contacts">
                        Contacts
                </NavLink>
                <NavLink class='font-mono' to="/appointments">
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