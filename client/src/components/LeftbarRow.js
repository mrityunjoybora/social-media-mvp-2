import React from "react";
import { Link } from "react-router-dom";

function LeftbarRow({ Icon, title, link }) {
  return (
    <Link to={link} className="flex gap-4 mx-4 xl:mx-8 my-2 px-4 xl:px-4 py-4 item-center  hover:rounded-full rou hover:bg-gray-100 transition duration-100 cursor-pointer">
      
        {<Icon className="h-6 w-6" />}
      
      <p className="font-medium hidden xl:inline-block">{title}</p>
    </Link>
  );
}

export default LeftbarRow;
