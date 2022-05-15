import { TrashIcon, UserIcon, KeyIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import AccountInfoCard from "../components/AccountInfoCard";
import DeleteAcccount from "../components/DeleteAcccount";
import ChangePasswordCard from "../components/ChangePasswordCard";
import Leftbar from "../components/Leftbar";
import SettingsMenuRow from "../components/SettingsMenuRow";

function Settings() {
  const [buttonState, setButtonState] = useState("Account Information");

  const handleAccountInfo = () => {
    setButtonState("Account Information");
  };
  const handleChangePassword = () => {
    setButtonState("Change Password");
  };
  const handleDeleteAccount = () => {
    setButtonState("Delete Account");
  };

  return (
    <div className="flex max-w-7xl  mx-auto pt-2 sm:pt-4 px-2 sm:px-16 md:px-24">
      <Leftbar />

      <div className="flex-col flex">
        <p className="font-semibold px-4">Settings</p>
        <button onClick={handleAccountInfo}>
          <SettingsMenuRow Icon={UserIcon} title={"Account Information"} />
        </button>
        <button onClick={handleChangePassword}>
          <SettingsMenuRow Icon={KeyIcon} title={"Change Password"} />
        </button>
        <button onClick={handleDeleteAccount}>
          <SettingsMenuRow
            Icon={TrashIcon}
            title={"Delete Account"}
            trashIcon={true}
          />
        </button>
      </div>
      <div className="flex-1">
        {(() => {
          switch (buttonState) {
            case "Account Information":
              return <AccountInfoCard />;

            case "Change Password":
              return <ChangePasswordCard />;

            case "Delete Account":
              return <DeleteAcccount />;

            default:
              return null;
          }
        })()}
      </div>
    </div>
  );
}

export default Settings;
