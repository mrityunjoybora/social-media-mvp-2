import { configureStore } from "@reduxjs/toolkit";
import { postOfFollowingReducer } from "./reducers/Post";
import { allUserReducer, userProfileReducer, userReducer } from "./reducers/User";

const store = configureStore({
  reducer: {
    user: userReducer,
    postOfFollowing: postOfFollowingReducer,
    allUsers: allUserReducer,
    userProfile: userProfileReducer,
    like: {},
    userPosts: {},
    friendsPosts: {},    
  },
});

export default store;
