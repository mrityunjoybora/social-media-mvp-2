const Post = require("../models/Post");
const User = require("../models/User");

// create post
exports.createPost = async (req, res) => {
  try {
    const newPostData = {
      caption: req.body.caption,
      image: {
        public_id: "req.body.public_id",
        url: "req.body.url",
      },
      owner: req.user._id,
    };

    const newPost = await Post.create(newPostData);

    const user = await User.findById(req.user.id);

    user.posts.push(newPost._id);

    await user.save();

    return res.status(201).json({
      success: true,
      post: newPost,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Create post:" + " " + error.message,
    });
  }
};

// like and unlike a post
exports.likeAndUnlikePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    if (post.likes.includes(req.user._id)) {
      const index = post.likes.indexOf(req.user._id);

      post.likes.splice(index, 1);

      await post.save();

      return res.status(200).json({
        success: true,
        message: "Post Unliked",
      });
    } else {
      post.likes.push(req.user._id);

      await post.save();

      return res.status(200).json({
        success: true,
        message: "Post Liked",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Like and Unlike error:" + " " + error.message,
    });
  }
};

// update a post caption
exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    if (post.owner.toString() !== req.user.id.toString()) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    post.caption = req.body.caption;

    await post.save();

    return res.status(200).json({
      success: true,
      message: "Post updated",
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Update post error:" + " " + error.message,
    });
  }
};

// delete a post
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    if (post.owner.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    await post.remove();

    const user = await User.findById(req.user._id);

    const index = user.posts.indexOf(req.params.id);

    user.posts.splice(index, 1);

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Post deleted",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Delete post error:" + " " + error.message,
    });
  }
};

// get post of following
exports.getPostOfFollowing = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    const posts = await Post.find({
      owner: {
        $in: user.followings,
      },
    }).populate("owner likes comments.user");

    return res.status(200).json({
      success: true,
      posts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Get post of following error:" + " " + error.message,
    });
  }
};

/*get My Posts
exports.getMyPost = async (req, res) => {
  try {
    // const user = await User.findById(req.user._id);

    // const postsUnresolved = user.posts.map(async (postId) => {
    //   return await Post.findById(postId);
    // });
 

    const posts = await Post.find({ owner: req.user._id });

    return res.status(200).json({
      success: true,
      posts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Get User Post error:" + " " + error.message,
    });
  }
};*/

// get all posts of a user
exports.getUserPost = async (req, res) => {
  try {
    // const user = await User.findById(req.params.id);

    // const postsUnresolved = user.posts.map(async (postId) => {
    //   return await Post.findById(postId);
    // });
    // const posts = Promise.all(postsUnresolved);

    const posts = await Post.find({ owner: req.params.id });

    return res.status(200).json({
      success: true,
      posts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Get Friends Posts error:" + " " + error.message,
    });
  }
};

// comment on post
exports.addComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(500).json({
        success: false,
        message: "Post not found",
      });
    }

    post.comments.push({
      user: req.user._id,
      comments: req.body.comment,
    });

    await post.save();

    return res.status(200).json({
      success: true,
      message: "Comment added successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Comments error:" + " " + error.message,
    });
  }
};

// delete comment
exports.deleteComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    const { commentId } = req.body;

    if (!post) {
      return res.status(500).json({
        success: false,
        message: "Post not found",
      });
    }

    if (!commentId) {
      return res.status(400).json({
        success: false,
        message: "Comment Id required",
      });
    }

    if (post.owner.toString() === req.user._id.toString()) {
      post.comments.forEach((item, index) => {
        if (item._id.toString() === commentId.toString()) {
          return post.comments.splice(index, 1);
        }
      });
    } else {
      post.comments.forEach((item, index) => {
        if (item.user.toString() === req.user._id.toString()) {
          if (item._id.toString() === commentId.toString()) {
            return post.comments.splice(index, 1);
          }
        }
      });
    }

    post.save();

    return res.status(200).json({
      success: true,
      message: "Comment Deleted",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Delete Comments error:" + " " + error.message,
    });
  }
};
