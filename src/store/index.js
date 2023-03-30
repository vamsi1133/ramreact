import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducer/countReducer";
import thunk from "redux-thunk";
import scoreReducer from "./reducer/scoreReducer";

const reducer = {
  userCount: countReducer,
  score: scoreReducer,
};
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(thunk),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
