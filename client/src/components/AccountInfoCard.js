import React from "react";

function AccountInfoCard() {
  return (
    <div className="px-10 py-10 flex-1">
      <form action="">
        <p className="font-semibold my-2">Name</p>
        <input
          className="border-2 w-full outline-none"
          type="text"
          value={"Mrityunjoy Bora"}
        />
      </form>
    </div>
  );
}

export default AccountInfoCard;
