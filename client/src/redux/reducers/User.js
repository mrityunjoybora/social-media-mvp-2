import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: true
};

export const userReducer = createReducer(initialState, {
  // loginRequest
  LoginRequest: (state) => {
    state.loading = true;
  },
  LoginSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  LoginFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  // register User
  RegisterRequest: (state) => {
    state.loading = true;
  },
  RegisterSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  RegisterFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  // load User
  LoadUserRequest: (state) => {
    state.loading = true;
  },
  LoadUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  LoadUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  // logout User
  LogoutUserRequest: (state) => {
    state.loading = true;
  },
  LogoutUserSuccess: (state) => {
    state.loading = false;
    state.user = null;
    state.isAuthenticated = false;
  },
  LogoutUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = true;
  },
});



export const allUserReducer = createReducer(initialState, {
  // all User
  allUserRequest: (state) => { 
    state.loading = true;
  },

  allUserSuccess: (state, action) => { 
    state.loading = false;
    state.users = action.payload;
  },
  allUserFailure: (state, action) => { 
    state.loading = false;
    state.error = action.payload;
  }
})

export const userProfileReducer = createReducer(initialState, {
  // user Profile
  userProfileRequest: (state) => { 
    state.loading = true;
  },
  userProfileSuccess: (state, action) => { 
    state.loading = false;
    state.user = action.payload;
  },
  userProfileFailure: (state, action) => { 
  state.loading = false;
  state.error = action.payload;
  }
})

