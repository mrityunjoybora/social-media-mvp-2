import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment, getPostOfFollowing } from "../redux/actions/Post";
import personDefault from "../images/person-icon.png";


function CommmentInputbox({ postId }) {
  const dispatch = useDispatch();

  const commentHandler = async (e) => {
    e.preventDefault();

      await dispatch(addComment(postId, commentValue));
      setCommentValue("");
      dispatch(getPostOfFollowing());
  };

  const [commentValue, setCommentValue] = useState("");
  return (
    <div className="my-2 py-1 border-b-2">
      <div className="flex gap-3 items-center my-2 ">
        {/* top Div */}
        <img
          className="w-10 h-10 rounded-full border-2 object-cover cursor-pointer"
          src={personDefault}
          alt=""
        />
        <form className="flex flex-1" onSubmit={(e) => commentHandler(e)}>
          <input
            className="resize-none border-none outline-none flex-grow px-4 py-1  h-8 bg-gray-100 rounded-full placeholder:text-sm"
            placeholder={`Press enter to comment!`}
            value={commentValue}
            onChange={(e) => setCommentValue(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

export default CommmentInputbox;
