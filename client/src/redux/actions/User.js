import axios from "axios";

// register a user
export const registerUser =
  (name, email, password, avatar) => async (dispatch) => {
    try {
      dispatch({
        type: "RegisterRequest",
      });

      const { data } = await axios.post("/user/register", {
        name,
        email,
        password,
        avatar,
      });

      dispatch({
        type: "RegisterSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "RegisterFailure",
        payload: error.response.data.message,
      });
    }
  };

// login a user
export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LoginRequest",
    });

    const { data } = await axios.post("/user/login", { email, password });

    dispatch({
      type: "LoginSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message,
    });
  }
};

// forgot password of user
export const forgotPassword = (email) => async (dispatch) => { 
  try {
    dispatch({
      type: "forgotPasswordRequest",
    });

    const { data } = await axios.post("/user/forgot/password", {
      email
    })
    dispatch({
      type: "forgotPasswordSuccess",
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: "forgotPasswordFailure",
      payload: error.response.data.message
    });
  }
}

// reset password of user
export const resetPassword = (token, password) => async (dispatch) => { 
  try {
    dispatch({
      type: "resetPasswordRequest",
      
    })
    
    const { data } = await axios.put(`/user/reset/${token}`, { password });

    dispatch({
      type: "resetPasswordSuccess",
      payload: data.message
    })

  } catch (error) {
    dispatch({
      type: "resetPasswordFailure",
      payload: error.response.data.message
    })
  }
}

// logout a user
export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LogoutUserRequest",
    });

    await axios.post("/user/logout");

    dispatch({
      type: "LogoutUserSuccess",
    });
  } catch (error) {
    dispatch({
      type: "LogoutUserFailure",
      payload: error.response.data.message,
    });
  }
};

// follow and unfollow user
export const followAndUnfollowUser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "followUserRequest",
    });

    const { data } = await axios.post(`/user/follow/${id}`);

    dispatch({
      type: "followUserSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "followUserFailure",
      payload: error.response.data.message,
    });
  }
};

// update password of user
export const updatePassword = (oldPassword, newPassword) => async (dispatch) => {
  try {
    dispatch({
      type: "updatePasswordRequest",
    });

    const { data } = await axios.post("/user/password/update", { oldPassword, newPassword })
    
    dispatch({
      type: "updatePasswordSuccess",
      payload: data.message
    })

  } catch (error) {
    dispatch({
      type: "updatePasswordFailure",
      payload: error.response.data.message,
    });
  }
};

// update profile of user
export const updateProfile = (name, email) => async (dispatch) => { 
  try {
    dispatch({
      type: "updateProfileRequest",
    });

    const { data } = await axios.post("/user/profile/update", { name, email });

    dispatch({
      type: "updateProfileSuccess",
      payload: data.message
    });
    
  } catch (error) {
    dispatch({
      type: "updateProfileFailure",
      payload: error.response.data.message,
    });
  }
}

// delete profile of user
export const deleteProfile = () => async (dispatch) => {
  try {
    dispatch({
      type: "deleteProfileRequest",
    });

    const { data } = await axios.post("/user/profile/delete")


    dispatch({
      type: "deleteProfileSuccess",
      payload: data.message
    });

  } catch (error) {
    dispatch({
      type: "deleteProfileFailure",
      payload: error.response.data.message,
    });
  }
};

// get my profile
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });

    const { data } = await axios.get("/user/profile/me");
    dispatch({
      type: "LoadUserSuccess",
      payload: data.myProfile,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserFailure",
      payload: error.response.data.message,
    });
  }
};

// get all users (*will have to modify*)
export const allUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: "allUserRequest",
    });

    const { data } = await axios.get("/user/profile/users");

    dispatch({
      type: "allUserSuccess",
      payload: data.users,
    });
  } catch (error) {
    dispatch({
      type: "allUserFailure",
      payload: error.response.data.message,
    });
  }
};

// get profile of a user (friend)
export const getUserProfile = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "userProfileRequest",
    });

    const { data } = await axios.post(`/user/profile${id}`);

    dispatch({
      type: "userProfileSuccess",
      payload: data.user
    });

  } catch (error) {
    dispatch({
      type: "logout",
      payload: error.response.data.message,
    });
  }
}
