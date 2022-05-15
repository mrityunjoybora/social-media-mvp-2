const express = require("express");
const {
  createPost,
  likeAndUnlikePost,
  updatePost,
  deletePost,
  getPostOfFollowing,
  getUserPost,
  getMyPost,
  addComment,
  deleteComment,
} = require("../controller/post");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();

// create post
router.post("/", isAuthenticated, createPost);

// update a post
router.post("/update/:id", isAuthenticated, updatePost);

// delete a post
router.delete("/delete/:id", isAuthenticated, deletePost);

// like and unlike a post
router.post("/like/:id", isAuthenticated, likeAndUnlikePost);

// get post of following
router.get("/following", isAuthenticated, getPostOfFollowing);

// comment on post
router.post("/comment/:id", isAuthenticated, addComment);


// delete comment
router.delete("/comment/delete/:id", isAuthenticated, deleteComment);


/* get all posts of the a user
router.get("/user/all", isAuthenticated, getMyPost);*/

// get posts of a user
router.get("/user/:id", isAuthenticated, getUserPost);


module.exports = router;