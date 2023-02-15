import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./adminSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});
