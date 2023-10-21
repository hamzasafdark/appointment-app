/* eslint-disable no-unused-vars */
import React from "react";

const Tile = (props) => {
    return (
        <div
          key={props.person.email}
          class="relative flex items-center space-x-1 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
        >
          <div class="min-w-0 flex-1">
            <div class="focus:outline-none">
              <span class="absolute inset-0" aria-hidden="true" />
              <p class="text-sm font-medium text-gray-900">{props.person.name}</p>
              <p class="truncate text-sm text-gray-500">{props.person.email}</p>
              <p class="truncate text-sm text-gray-500">{props.person.phone}</p>
            </div>
          </div>
        </div>
    )
}

export default Tile 