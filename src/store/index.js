import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducer/countReducer";

const reducer = {
  userCount: countReducer,
};
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
