import { PhotographIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import personDefault from "../images/person-icon.png";
import headshot from "../images/istockphoto-1034357476-612x612.jpg";
import { createPost } from "../redux/actions/Post";

function Textbox() {

  const dispatch = useDispatch();


  const [postValue, setPostValue] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createPost({ caption: postValue }));
    setPostValue("");
  };

  return (
    <div className="bg-white p-6 rounded-2xl">
      <div className="flex gap-3 items-center ">
        {/* top Div */}
        <Link to="/profile">
          <img
            className="w-10 h-10 rounded-full border-2 object-cover cursor-pointer"
            src={headshot}
            alt=""
          />
        </Link>
        <form className="flex flex-1" onSubmit={(e) => handleSubmit(e)}>
          <textarea
            className="resize-none border-none outline-none flex-grow px-4 py-2 placeholder:py-1 h-12 bg-gray-100 rounded-full placeholder:text-sm"
            placeholder={`What's on your mind?`}
            value={postValue}
            onChange={() => setPostValue()}
          />
        </form>
      </div>
      <div className="pt-4 flex justify-between items-center">
        <button className="hover:bg-gray-100  py-1 px-3 rounded-full flex gap-1 font-medium items-center transition duration-100">
          <PhotographIcon className="h-4 w-4  " /> Photo/Video
        </button>

        <button
          className="rounded-full bg-purple-500 text-white font-medium px-6 py-1 hover:bg-purple-400 transition duration-100"
          type="submit"
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default Textbox;
