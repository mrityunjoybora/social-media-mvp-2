import React from 'react'
import headshot from "../images/istockphoto-1034357476-612x612.jpg";
import personDefault from "../images/person-icon.png";


function Friends({user}) {
  return (
    <div className="flex gap-2 items-center cursor-pointer rounded-full hover:bg-gray-100 px-4 py-1 my-2 transition duration-100 border-2">
      <img
        className="w-10 h-10 rounded-full object-cover border-2"
        src={personDefault}
        alt=""
      />
      <p className="font-medium text-sm">{user.name}</p>
    </div>
  );
}

export default Friends;