import React from "react";
import LeftbarRow from "./LeftbarRow";
import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  MailIcon,
  BookmarkIcon,
  UserCircleIcon,
  CogIcon,
} from "@heroicons/react/solid";

function Leftbar() {
  return (
    <div className="flex sm:inline-block">
      <div className="bg-white rounded-2xl py-2">
        <LeftbarRow Icon={HashtagIcon} title={"Explore"} link={"/"} />
        <LeftbarRow Icon={HomeIcon} title={"Home"} link={"/"} />
        <LeftbarRow Icon={BellIcon} title={"Notification"} link={"/"} />
        <LeftbarRow Icon={MailIcon} title={"Message"} link={"/"} />
        <LeftbarRow Icon={BookmarkIcon} title={"Bookmark"} link={"/"} />
        <LeftbarRow Icon={UserCircleIcon} title={"Profile"} link={"/profile"} />
        <LeftbarRow Icon={CogIcon} title={"Settings"} link={"/setting"} />
      </div>
    </div>
  );
}

export default Leftbar;
