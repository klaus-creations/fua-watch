import { createSlice } from "@reduxjs/toolkit";
const storedActiveSidebarLink = localStorage.getItem("active-sidebar");

const initialState = {
  activeSidebarLink: storedActiveSidebarLink ? storedActiveSidebarLink : "home",
};

const sidebarLink = createSlice({
  name: "sidebarLink",
  initialState,
  reducers: {
    changeActiveSidebarLink: (state, action) => {
      state.activeSidebarLink = action.payload;
      localStorage.setItem("active-sidebar", state.activeSidebarLink);
    },
  },
});

export default sidebarLink.reducer;
export const { changeActiveSidebarLink } = sidebarLink.actions;
