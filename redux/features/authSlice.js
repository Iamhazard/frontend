import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      //update state when user is logged in
      state.isLoggedIn = true;
      //store user data
      state.user = action.payload;
    },
    logout: (state) => {
      //update state when user is logged out
      state.isLoggedIn = false;
      //clears user data
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
