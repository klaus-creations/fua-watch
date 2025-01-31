import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "movie",
};

const feedTypeSlice = createSlice({
  name: "feedType",
  initialState,
  reducers: {
    changeSearchType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export default feedTypeSlice.reducer;
export const { changeSearchType } = feedTypeSlice.actions;
