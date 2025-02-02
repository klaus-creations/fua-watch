import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "movie",
  word: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeSearchType: (state, action) => {
      state.type = action.payload;
    },
    changeSearchWord: (state, action) => {
      state.word = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { changeSearchType, changeSearchWord } = searchSlice.actions;
