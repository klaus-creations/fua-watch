import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "movie",
  word: "",
  isOpen: false,
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
    openSearch: (state) => {
      state.isOpen = true;
    },
    closeSearch: (state) => {
      state.isOpen = false;
      state.word = "";
    },
  },
});

export default searchSlice.reducer;
export const { changeSearchType, changeSearchWord, openSearch, closeSearch } =
  searchSlice.actions;
