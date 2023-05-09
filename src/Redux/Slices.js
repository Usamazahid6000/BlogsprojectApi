import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const counterSlice = createSlice({
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

export const { incrementViews } = counterSlice.actions;
export default counterSlice.reducer;
