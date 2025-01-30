import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpened: false,
};

const sideBarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSideBar: (state, action) => {
      state.isOpened = action.payload;
    },
  },
});

export default sideBarSlice.reducer;
export const { toggleSideBar } = sideBarSlice.actions;
