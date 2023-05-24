import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../Redux/Slices";
//import blogViewsReducer from "../Redux/Slices";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
