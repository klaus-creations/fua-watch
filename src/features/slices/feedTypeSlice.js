import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "movie",
};

const feedTypeSlice = createSlice({
  name: "feedType",
  initialState,
  reducers: {
    changeFeedType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export default feedTypeSlice.reducer;
export const { changeFeedType } = feedTypeSlice.actions;
