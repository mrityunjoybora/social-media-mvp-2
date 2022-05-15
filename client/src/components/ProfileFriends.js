import React from "react";
import headshot from "../images/istockphoto-1034357476-612x612.jpg";

function ProfileFriends() {
  return (
    <div className="flex flex-col max-w-2xl justify-center items-center overflow-hidden font-semibold">
      <img
        className="h-20 w-20 object-cover rounded-lg"
        src={headshot}
        alt=""
      />

      <p className="max-h-[44px] max-w-[80px]">Subhransu Sekhar Dhar Goswami</p>
    </div>
  );
}

export default ProfileFriends;
