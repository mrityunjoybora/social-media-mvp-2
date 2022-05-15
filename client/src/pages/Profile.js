import React from "react";
import Feed from "../components/Feed";
import Leftbar from "../components/Leftbar";
import ProfileRightBar from "../components/ProfileRightBar";
import cover from "../images/cover2.jpg";
import headshot from "../images/istockphoto-1034357476-612x612.jpg";

function Profile() {
  return (
    <div className="flex max-w-7xl  mx-auto pt-2 sm:pt-4 px-2 sm:px-16 md:px-24">
      <Leftbar />
      <div>
        {/* profileRight */}
        <div>
          {/* profileRightTop */}
          <div className="relative mb-20">
            {/* cover photo */}

            <img className="h-80 w-screen object-cover" src={cover} alt="" />

            {/* profile picture */}
            <img
              className="h-40 w-40 object-cover rounded-full absolute left-0 right-0 m-auto top-56 border-4 border-white"
              src={headshot}
              alt=""
            />
          </div>
          <div>
            <p className="text-center text-2xl font-bold">Mrityunjoy Bora</p>
          </div>
        </div>
        <div>
          {/* profileRightBottom */}
          <div className="flex my-10">
            {/* timeline/profileBottomLeft  */}
            {/* post textbox */}
            <Feed />
                      {/* feed */}
            <ProfileRightBar/>
          </div>

          <div>
            {/* profileBottomRight */}
            {/* user info */}
            {/* friends */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
