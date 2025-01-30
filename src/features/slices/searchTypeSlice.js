import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "movies",
};

const searchTypeSlice = createSlice({
  name: "searchType",
  initialState,
  reducers: {
    changeSearchType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export default searchTypeSlice.reducer;
export const { changeSearchType } = searchTypeSlice.actions;
