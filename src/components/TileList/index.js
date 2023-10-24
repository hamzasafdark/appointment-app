/* eslint-disable no-unused-vars */
import React from "react";

const TileList = (props) => {
  return (
    <div class="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {props.contactLists &&
        props.contactLists?.map((person, index) => (
          <div
            key={index}
            class="relative flex items-center space-x-1 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
          >
            <div class="min-w-0 flex-1">
              <div class="focus:outline-none">
                <span class="absolute inset-0" aria-hidden="true" />
                <p class="text-sm font-medium text-gray-900">{person.name}</p>
                <p class="truncate text-sm text-gray-500">{person.email}</p>
                <p class="truncate text-sm text-gray-500">{person.phoneNumber}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TileList;
