import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "movies",
};

const feedTypeSlice = createSlice({
  name: "searchType",
  initialState,
  reducers: {
    changeSearchType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export default feedTypeSlice.reducer;
export const { changeSearchType } = feedTypeSlice.actions;
