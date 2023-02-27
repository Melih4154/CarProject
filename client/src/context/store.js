import { configureStore } from "@reduxjs/toolkit"; 
import authSlice from "../redux/authSlice";
import demageSlice from "../redux/demageSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  }, 
});
