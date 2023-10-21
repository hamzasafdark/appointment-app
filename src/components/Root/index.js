/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet, NavLink } from "react-router-dom"

const Root = () => {
    return (
        <>
            <nav>
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