import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentuser: null,
  error: null,
  loading: false,
  passwordResetRequestSent: false,
  passwordResetSuccess: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // cample case

    // Sign-Up State
    signUpStart: (state) => {
      state.currentuser = null;
      state.loading = true;
      state.error = null;
    },

    signUpSuccess: (state, action) => {
      state.currentuser = action.payload;
      state.loading = false;
      state.error = null;
    },

    signUpFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Sign-In State
    sigInStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    sigInSuccess: (state, action) => {
      state.currentuser = action.payload;
      state.loading = false;
      state.error = null;
    },

    sigInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //signOutSuccess state
    signOutSuccess: (state) => {
      state.currentuser = null;
      state.loading = false;
      state.error = null;
    },

    //Forget-password State
    forgetPasswordStart: (state) => {
      state.loading = true;
      state.error = null;
      state.passwordResetRequestSent = false;
    },

    forgetPasswordSuccess: (state) => {
      state.loading = false;
      state.error = null;
      state.passwordResetRequestSent = true;
    },

    forgetPasswordFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.passwordResetRequestSent = false;
    },

    //Reset-password State
    resetPasswordStart: (state) => {
      state.loading = true;
      state.error = null;
      state.passwordResetSuccess = false;
    },

    resetPasswordSuccess: (state) => {
      state.loading = false;
      state.error = null;
      state.passwordResetSuccess = true;
    },

    resetPasswordFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.passwordResetSuccess = false;
    },
  },
});

export const {
  signUpStart,
  signUpSuccess,
  signUpFailure,

  sigInStart,
  sigInSuccess,
  sigInFailure,

  signOutSuccess,

  forgetPasswordStart,
  forgetPasswordSuccess,
  forgetPasswordFailure,

  resetPasswordStart,
  resetPasswordSuccess,
  resetPasswordFailure,
} = userSlice.actions;
export default userSlice.reducer;
