import React from 'react'

function ChangePasswordCard() {
  return (
    <div className="px-10 py-10 flex-1">
      <form action="">
        <p className="font-semibold my-2">Old Password</p>
        <input className="border-2 w-full outline-none" type="password" />
        <p className="font-semibold my-2">New Password</p>
        <input className="border-2 w-full outline-none" type="password" />
      </form>
    </div>
  );
}

export default ChangePasswordCard