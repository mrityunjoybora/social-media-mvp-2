import React, { useState } from "react";
import personDefault from "../images/person-icon.png";
import {
  AnnotationIcon,
  DotsVerticalIcon,
  ThumbUpIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import { ThumbUpIcon as ThumbUpIconOutline } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { getPostOfFollowing, likeAndUnlikePost } from "../redux/actions/Post";
import CommmentInputbox from "./CommmentInputbox";
import CommentCard from "./CommentCard";
import { Link } from "react-router-dom";

function Post({ post, isDelete = true, isAccount = true }) {
  const dispatch = useDispatch();

  const [isLike, setIsLike] = useState(false);
  // const [isDelete, setIsDelete] = useState(true)

  const [showComments, setShowComments] = useState(false)

  const handleLike = async () => {
    setIsLike(!isLike);

    await dispatch(likeAndUnlikePost(post._id));
    dispatch(getPostOfFollowing());
  };
  return (
    <div className="rounded-2xl bg-white my-4 px-6 pt-6 pb-4 shadow-sm lg:min-w-[35vw] border-2">
      <div className="flex justify-between items-center">
        <Link to="/profile" className="flex gap-2 items-center cursor-pointer ">
          <img
            className="w-10 h-10 rounded-full border-2 object-cover"
            src={personDefault}
            alt=""
          />
          <div>
            <p className="font-semibold">{""}</p>
            <p className="text-xs font-medium text-gray-400">{"22/05/22"}</p>
          </div>
        </Link>
        {isAccount ? <DotsVerticalIcon className="h-4" /> : null}
      </div>

      <p className="mt-4 text-sm">{post.caption}</p>
      <div className="flex justify-center">
        <img
          className="h-auto md:w-96 mt-4 object-fill"
          src={post.image}
          alt=""
        />
      </div>
      <button className="text-sm">
        {post.likes.length > 0 ? post.likes.length : 0} Likes
      </button>
      <div className="flex justify-evenly mt-4 border-b-2">
        <button
          onClick={handleLike}
          className="flex gap-2 items-center cursor-pointer hover:bg-gray-100 rounded-full py-1 px-6 transition duration-100"
        >
          {isLike ? (
            <ThumbUpIcon className="h-4 " />
          ) : (
            <ThumbUpIconOutline className="h-4 " />
          )}
          <p>Like</p>
        </button>
        <button
          className="flex gap-2 items-center cursor-pointer hover:bg-gray-100 rounded-full py-1 px-6 transition duration-100"
          onClick={() => setShowComments(!showComments)}
        >
          <AnnotationIcon className="h-4" />
          <p>Comment</p>
        </button>
        {isDelete ? (
          <button className="flex gap-2 items-center cursor-pointer hover:bg-gray-100 rounded-full py-1 px-6 transition duration-100 text-red-500">
            <TrashIcon className="h-4" />
            <p>Delete</p>
          </button>
        ) : null}
      </div>
      <CommmentInputbox postId={post._id} />

      {showComments
        ? post.comments.length > 0
          ? post.comments.map((c) => (
              <CommentCard
                key={c._id}
                comment={c.comments}
                name={c.user.name}
                commentId={c._id}
                userId={c.user._id}
                isAccount={isAccount}
                post={post}
              />
            ))
          : null
        : null}
    </div>
  );
}

export default Post;
