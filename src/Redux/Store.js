import { configureStore } from "@reduxjs/toolkit";
import blogViewsReducer from "../Redux/Slices";

export const store = configureStore({
  reducer: {
    blogViews: blogViewsReducer,
  },
});

export default store;