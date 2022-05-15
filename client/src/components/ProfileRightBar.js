import React from 'react'
import ProfileFriends from './ProfileFriends'

function ProfileRightBar() {
  return (
    <div className="px-2">
      <p className="font-bold pb-4">Friends</p>
      <div className="grid grid-cols-3 gap-y-4 gap-x-2">
        <ProfileFriends />
        <ProfileFriends />
        <ProfileFriends />
        <ProfileFriends />
        <ProfileFriends />
        <ProfileFriends />
        <ProfileFriends />
        <ProfileFriends />
      </div>
    </div>
  );
}

export default ProfileRightBar