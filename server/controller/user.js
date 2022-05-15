const User = require("../models/User");
const Post = require("../models/Post");
const crypto = require("crypto");
const { sendEmail } = require("../middlewares/sendEmail");

// register a user
exports.register = async (req, res) => {
  try {
    const { name, email, password, avatar } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    user = await User.create({
      name,
      email,
      password,
      avatar: { public_id: "public_id", url: "url" },
    });

    const token = await user.generateToken();
    const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    return res.status(201).cookie("token", token, options).json({
      success: true,
      message: "User registered in successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Register error message:" + " " + error.message,
    });
  }
};

// login a user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User does not exist",
      });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Incorrect password",
      });
    }

    const token = await user.generateToken();
    const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    return res.status(200).cookie("token", token, options).json({
      success: true,
      message: "User logged in successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Login error message:" + " " + error.message,
    });
  }
};

// logout a user
exports.logout = async (req, res) => {
  try {
    return res
      .status(200)
      .cookie("token", null, { expires: new Date(Date.now()), httpOnly: true })
      .json({
        success: true,
        message: "Logged out",
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Logout error:" + " " + error.message,
    });
  }
};

// follow and unfollow a user
exports.followAndUnfollow = async (req, res) => {
  try {
    const userToFollow = await User.findById(req.params.id);
    const loggedInUser = await User.findById(req.user._id);

    if (!userToFollow) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (userToFollow._id.toString() === loggedInUser._id.toString()) {
      return res.status(500).json({
        success: false,
        message: "Can't follower yourself",
      });
    }
    if (userToFollow.followers.includes(loggedInUser._id)) {
      const indexOfFollowers = userToFollow.followers.indexOf(loggedInUser._id);
      userToFollow.followers.splice(indexOfFollowers, 1);
      await userToFollow.save();

      const indexOfFollowings = userToFollow.followings.indexOf(
        userToFollow._id
      );
      loggedInUser.followings.splice(indexOfFollowings, 1);
      await loggedInUser.save();

      return res.status(200).json({
        success: true,
        message: "User Unfollowed",
      });
    }

    userToFollow.followers.push(loggedInUser._id);
    await userToFollow.save();

    loggedInUser.followings.push(userToFollow._id);
    await loggedInUser.save();

    return res.status(200).json({
      success: true,
      message: "User followed",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Follow and Unfollow error:" + " " + error.message,
    });
  }
};

// update password of user
exports.updatePassword = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Please provide password",
      });
    }

    const isMatch = await user.matchPassword(oldPassword);

    if (!isMatch) {
      return res.status(401).json({
        status: false,
        message: "Incorrect Password",
      });
    }

    user.password = newPassword;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Password Updated",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Update Password error:" + " " + error.message,
    });
  }
};

// update profile of user
exports.updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    const { name, email } = req.body;

    if (name) {
      user.name = name;
    }
    if (email) {
      user.email = email;
    }

    // Avater Update

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Profile Updated",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Profile Update error:" + " " + error.message,
    });
  }
};

// delete profile of user
exports.deleteProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    const userPosts = user.posts;

    const userFollowing = user.followings;
    const userFollower = user.followers;
    const userId = user._id;

    await user.remove();

    // Removing cookie
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });

    // Deleting all posts of user
    userPosts.forEach(async (postId) => {
      const post = await Post.findById(postId);
      await post.remove();
    });

    // Removing user from Follower's Following
    userFollower.forEach(async (followerId) => {
      const follower = await User.findById(followerId);

      const index = follower.followings.indexOf(userId);
      follower.followings.splice(index, 1);
      await follower.save();
    });

    // Removing user from Following's Followers
    userFollowing.forEach(async (followingId) => {
      const following = await User.findById(followingId);

      const index = following.followers.indexOf(userId);
      following.followers.splice(index, 1);
      await following.save();
    });

    return res.status(200).json({
      success: true,
      message: "Profile deleted",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Delete Profile error:" + " " + error.message,
    });
  }
};

// get my profile
exports.getMyProfile = async (req, res) => {
  try {
    const myProfile = await User.findById(req.user._id);

    if (!myProfile) {
      return res.status(404).json({
        status: false,
        message: "Profile not found",
      });
    }

    return res.status(200).json({
      status: true,
      myProfile,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Get My Profile error:" + " " + error.message,
    });
  }
};

// get all users
exports.getAllUser = async (req, res) => {
  try {
    const users = await User.find();

    if (!users) {
      return res.status(404).json({
        success: false,
        message: "Users not found",
      });
    }

    return res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Get All Users error:" + " " + error.message,
    });
  }
};

// get profile of a user (friends)
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Get User Profile error:" + " " + error.message,
    });
  }
};

// forgot password of user
exports.forgotPassword = async (req, res) => {
  try {
    if (!req.body.email) {
      return res.status(500).json({
        status: false,
        message: "Please provide an email",
      });
    }

    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }

    let resetPasswordToken;

    user.getResetPasswordToken().then((value) => {
      resetPasswordToken = value;
    });

    await user.save();

    const resetUrl = `${req.protocol}://${req.get(
      "host"
    )}/api/user/password/reset/${resetPasswordToken}`;

    const html = `<p>Reset Your Password by clicking on the link below:</p>
    <a href=${resetUrl}> ${resetUrl} </a>`;

    try {
      const options = {
        email: user.email,
        subject: "Reset Password",
        html,
      };

      await sendEmail(options);

      return res.status(200).json({
        success: true,
        message: `Email sent to ${user.email}`,
      });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();

      return res.status(500).json({
        success: false,
        message: `Email could not send to ${user.email}` + error.message,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Forgot Password error:" + " " + error.message,
    });
  }
};

// reset password of user
exports.resetPassword = async (req, res) => {
  try {
    if (!req.params.token || !req.body.password) {
      return res.status(500).json({
        status: false,
        message: "Please provide a password",
      });
    }

    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });


    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid Token/Token Expired",
      });
    }

    user.password = req.body.password;

    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    return res.status(200).json({
      status: true,
      message: "Password updated"
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Reset Password error:" + " " + error.message,
    });
  }
};
