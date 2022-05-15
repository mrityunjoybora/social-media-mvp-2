import axios from "axios";

// create post
export const createPost = (caption, image) => async (dispatch) => {
  try {
    dispatch({
      type: "newPostRequest",
    });

    const { data } = await axios.post("/post/", { caption, image });

    dispatch({
      type: "newPostFailure",
      payload: data.newPost,
    });
  } catch (error) {
    dispatch({
      type: "newPostFailure",
      payload: error.response.data.message,
    });
  }
};

// update a post
export const updateCaption = (id, caption) => async (dispatch) => {
  try {
    dispatch({
      type: "updateCaptionRequest",
    });

    const { data } = await axios.post(`/post/update/${id}`, { caption });

    dispatch({
      type: "updateCaptionFailure",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "updateCaptionFailure",
      payload: error.response.data.message,
    });
  }
};

// delete a post
export const deletePost = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deletePostRequest",
    });

    const { data } = await axios.post(`/post/delete/${id}`);
    dispatch({
      type: "deletePostSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deletePostFailure",
      payload: error.response.data.message,
    });
  }
};

// like and unlike a post
export const likeAndUnlikePost = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "likeRequest",
    });

    const { data } = await axios.post(`/post/like/${id}`);

    dispatch({
      type: "likeSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "likeFailure",
      payload: error.response.data.message,
    });
  }
};

// get post of following
export const getPostOfFollowing = () => async (dispatch) => {
  try {
    dispatch({
      type: "postOfFollowingRequest",
    });

    const { data } = await axios.get("/post/following");

    dispatch({
      type: "postOfFollowingSuccess",
      payload: data.posts,
    });
  } catch (error) {
    dispatch({
      type: "postOfFollowingFailure",
      payload: error.response.data.message,
    });
  }
};

// comment on post
export const addComment = (id, comment) => async (dispatch) => {
  try {
    dispatch({
      type: "addCommentRequest",
    });

    const { data } = await axios.post(`/post/comment/${id}`, { comment });
    dispatch({
      type: "addCommentSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "addCommentFailure",
      payload: error.response.data.message,
    });
  }
};

// delete comment
export const deleteComment = (postId, commentId) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteCommentRequest",
    });
    console.log(commentId);
    console.log(postId);
    const { data } = await axios.delete(`/post/comment/delete/${postId}`, {
      data: { commentId },
    });

    

    dispatch({
      type: "deleteCommentSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteCommentFailure",
      payload: error.response.data.message,
    });
  }
};

/* get all post of the user
export const getUserPost = () => async (dispatch) => {
  try {
    dispatch({
      type: "userPostsRequest",
    });

    const { data } = await axios.get("/post/user/all");

    dispatch({
      type: "userPostsSuccess",
      payload: data.posts,
    });

  } catch (error) {
    dispatch({
      type: "userPostsFailure",
      payload: error.response.data.message,
    });
  }
};*/

// get friends post of user
export const getUserPost = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "friendsPostsRequest",
    });

    const { data } = await axios.get(`/post/user/${id}`);

    dispatch({
      type: "friendsPostsSuccess",
      payload: data.posts,
    });
  } catch (error) {
    dispatch({
      type: "friendsPostsFailure",
      payload: error.response.data.message,
    });
  }
};
