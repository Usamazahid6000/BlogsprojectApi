import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

const counterSlice = createSlice({
  name: "blogsViews",
  initialState,
  reducers: {
    incrementViews(state, action) {
      // let { bogId } = action.payload;
      let payloadData = action.payload.bogId;
      let totalViews = state.value[payloadData] || 0;
      state.value[payloadData] = totalViews + 1;
    },
  },
});

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: "light", // Initial theme mode
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { incrementViews } = counterSlice.actions;
export const { toggleTheme } = themeSlice.actions;

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  mode: themeSlice.reducer,
});

export default rootReducer;

export const selectTheme = (state) => state.mode;
