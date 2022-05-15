import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allUsers } from "../redux/actions/User";
import Friends from "./Friends";

function Rightbar() {

  const dispatch = useDispatch();
  
  const { users } = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(allUsers());
  }, [dispatch]);
  

  return (
    // <div className="">
    <div className="rounded-2xl px-6 hidden lg:inline-block py-4 bg-white flex-shrink-0 mb-2 overflow-y-auto">
      <p className="text-lg font-medium mx-4">Friends</p>
      <div>
        {users && users.length > 0 ? (
          users.map((user) => <Friends key={user._id} user={user} />)
        ) : (
          <p>No user yet!</p>
        )}
      </div>
    </div>
    // </div>
  );
}

export default Rightbar;
