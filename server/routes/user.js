const express = require("express");
const { route } = require("express/lib/router");
const { register, login, followAndUnfollow, logout, updateProfile, updatePassword, deleteProfile, getAllUser, getUserProfile, getMyProfile, forgotPassword, resetPassword } = require("../controller/user");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();

// register a user
router.post("/register", register);

// login a user
router.post("/login", login);

// forgot password of user
router.post("/forgot/password", forgotPassword);

// reset password of user
router.put("/password/reset/:token", resetPassword);

// router.use(isAuthenticated);

// logout a user
router.post("/logout", isAuthenticated, logout);

// follow a user
router.post("/follow/:id", isAuthenticated, followAndUnfollow);

// update password of user
router.post("/password/update", isAuthenticated, updatePassword);


// update profile of user
router.post("/profile/update", isAuthenticated, updateProfile);

// delete profile of user
router.post("/profile/delete", isAuthenticated, deleteProfile);

// get my profile
router.get("/profile/me", isAuthenticated, getMyProfile);

// get all users
router.get("/profile/users", isAuthenticated, getAllUser);

// get profile of a user (friend)
router.get("/profile/:id", isAuthenticated, getUserProfile);



module.exports = router;
