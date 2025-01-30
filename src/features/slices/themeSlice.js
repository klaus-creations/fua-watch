import { createSlice } from "@reduxjs/toolkit";

const storedTheme = localStorage.getItem("theme");

const initialState = {
  themeSelector: storedTheme ? storedTheme : "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state, action) => {
      state.themeSelector = action.payload;
      localStorage.setItem("theme", state.themeSelector);
    },
  },
});

export default themeSlice.reducer;
export const { toggleDarkMode } = themeSlice.actions;
