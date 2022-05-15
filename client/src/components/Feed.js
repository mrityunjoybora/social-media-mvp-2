import React, { useEffect } from 'react'
import Post from './Post'
import Textbox from './Textbox'
// import headshot from "../images/istockphoto-1034357476-612x612.jpg";
import { useDispatch, useSelector } from 'react-redux';
import { getPostOfFollowing } from '../redux/actions/Post';

function Feed() {

  const dispatch = useDispatch();

  const { loading, posts ,error} = useSelector((state) => state.postOfFollowing);

  useEffect(() => {
    dispatch(getPostOfFollowing());
  }, [dispatch]);

  
  

  return (
    <div className="flex-grow h-screen overflow-y-auto box-border px-4  max-h-[86.5vh] lg:min-w-[600px] md:min-w-[500px] sm:min-w-[400px]">
      {/* Textbox */}
      <Textbox />

      {/* Posts */}
      {posts && posts.length > 0 ? (
        posts.map((post) => <Post key={post._id} post={post} />)
      ) : (
        <p>No post yet!</p>
      )}
    </div>
  );
}

export default Feed