import React from "react";
import { TrashIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, getPostOfFollowing } from "../redux/actions/Post";

function CommentCard({ comment, name,commentId, userId, isAccount, post }) {
  const dispatch = useDispatch();

  const user_Id = useSelector((state) => state.user.user._id);

  const deleteCommentHandle = async () => { 
    await dispatch(deleteComment(post._id, commentId));
    dispatch(getPostOfFollowing());
  }

  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="font-semibold text-sm ">{name}</p>
        <p className="text-xs my-1">{comment}</p>
      </div>

      {userId === user_Id || isAccount ? (
        <button onClick={deleteCommentHandle}>
          <TrashIcon className="h-4 text-red-500" />
        </button>
      ) : null}
    </div>
  );
}

export default CommentCard;
