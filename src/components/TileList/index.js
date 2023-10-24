/* eslint-disable no-unused-vars */
import React from "react";
import Tile from "../Tile";

const TileList = (props) => {
  console.log("Props: ", props);
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {props.isContact
          ? props.contactLists && props.contactLists?.map((person, index) => (
            <div
              key={index}
              className="relative flex items-center space-x-1 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
            >
              <div className="min-w-0 flex-1">
                <div className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">{person.name}</p>
                  <p className="truncate text-sm text-gray-500">{person.email}</p>
                  <p className="truncate text-sm text-gray-500">{person.phoneNumber}</p>
                </div>
              </div>
            </div>
          ))
          : props.appointmentLists.allAppointments && props.appointmentLists.allAppointments?.map((appointment, index) => (
            <div
              key={index}
              className="relative flex items-center space-x-1 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
            >
              <div className="min-w-0 flex-1">
                <div className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">{appointment.title}</p>
                  <p className="truncate text-sm text-gray-500">{appointment.contactName}</p>
                  <p className="truncate text-sm text-gray-500">{appointment.Date}</p>
                  <p className="truncate text-sm text-gray-500">{appointment.Time}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};


export default TileList;
