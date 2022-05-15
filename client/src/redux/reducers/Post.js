import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const likeReducer = createReducer(initialState, {
  // Like
  likeRequest: (state) => {
    state.loading = true;
  },
  likeSuccess: (state, action) => {
    state.loading = false;
    state.loading = action.payload;
  },
  likeFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  //   addComment
  addCommentRequest: (state) => {
    state.loading = true;
  },
  addCommentSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  addCommentFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  //   deleteComment
  deleteCommentRequest: (state) => {
    state.loading = true;
  },
  deleteCommentSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  deleteCommentFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  //   newPost
  newPostRequest: (state) => {
    state.loading = true;
  },
  newPostSuccess: (state, action) => {
    state.loading = false;
    state.post = action.payload;
  },
  newPostFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  //   updateCaption
  updateCaptionRequest: (state) => {
    state.loading = true;
  },
  updateCaptionSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  updateCaptionFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  //   deletePost
  deletePostRequest: (state) => {
    state.loading = true;
  },
  deletePostSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  deletePostFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  // updateProfile
  updateProfileRequest: (state) => {
    state.loading = true;
  },
  updateProfileSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  updateProfileFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  //   deleteProfile
  deleteProfileRequest: (state) => {
    state.loading = true;
  },
  deleteProfileSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  deleteProfileFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  //   updatePassword
  updatePasswordRequest: (state) => {
    state.loading = true;
  },
  updatePasswordSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  updatePasswordFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  //   forgotPassword
  forgotPasswordRequest: (state) => {
    state.loading = true;
  },
  forgotPasswordSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  forgotPasswordFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  //   resetPassword
  resetPasswordRequest: (state) => {
    state.loading = true;
  },
  resetPasswordSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  resetPasswordFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  //   followUser
  followUserRequest: (state) => {
    state.loading = true;
  },
  followUserSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  followUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});

export const postOfFollowingReducer = createReducer(
  { initialState },
  {
    // post Of Following
    postOfFollowingRequest: (state) => {
      state.loading = true;
    },
    postOfFollowingSuccess: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    postOfFollowingFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);

export const userPostReducer = createReducer(initialState, {

  // my Post
  userPostsRequest: (state) => {
    state.loading = true;
  },
  userPostsSuccess: (state, action) => {
    state.loading = false;
    state.posts = action.payload;
  },
  userPostsFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});

export const friendsPostsReducer = createReducer(initialState, {
  // userPosts
  friendsPostsRequest: (state) => {
    state.loading = true;
  },
  friendsPostsSuccess: (state, action) => {
    state.loading = false;
    state.posts = action.payload;
  },
  friendsPostsFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});
