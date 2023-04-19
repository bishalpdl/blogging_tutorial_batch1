import { createSlice } from "@reduxjs/toolkit";

import {
  getToken,
  isUserLogin,
  resetUserLogin,
  setUserLogin,
} from "../../utils/storage.utils";

const initialStates = {
  loginStatus: isUserLogin() || false,
  token: getToken() || "",
};

export const accountSlice = createSlice({
  name: "user",
  initialState: initialStates,
  reducers: {
    setLogin: (state, action) => {
      setUserLogin({ ...action.payload });
      state.loginStatus = true;
      state.token = action.payload.token;
    },
    resetLogin: (state) => {
      resetUserLogin();
      state.token = "";
      state.loginStatus = false;
    },
  },
});

export const { setLogin, resetLogin } = accountSlice.actions;
export default accountSlice.reducer;
