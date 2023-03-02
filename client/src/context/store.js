// import { configureStore } from "@reduxjs/toolkit";
// import authSlice from "../redux/authSlice";
// import demageSlice from "../redux/demageSlice";

// export const store = configureStore({
//   reducer: {
//     auth: authSlice,

//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/authSlice";
import demageReducer from "../redux/demageSlice";
import messageReducer from "../redux/message";
import documentReducer from "../redux/documentSlice";

const reducer = {
  auth: authReducer,
  message: messageReducer,
  demage: demageReducer,
  document: documentReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
