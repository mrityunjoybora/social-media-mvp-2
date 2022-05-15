import { ChevronRightIcon } from '@heroicons/react/solid';
import React from 'react'

function SettingsMenuRow({ Icon, title, trashIcon }) {
    return (
      <div className="flex justify-between items-center gap-4 px-4  my-2 py-4 item-center hover:bg-gray-100 transition duration-100 cursor-pointer">
        <div className="flex gap-4 items-center">
          {trashIcon ? (
            <Icon className="h-4 w-4 text-red-500" />
          ) : (
            <Icon className="h-5 w-5" />
          )}
          <p className="hidden xl:inline-block">{title}</p>
        </div>

        <ChevronRightIcon className="h-5 w-5" />
      </div>
    );
}

export default SettingsMenuRow