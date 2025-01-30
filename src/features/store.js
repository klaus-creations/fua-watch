import { configureStore } from "@reduxjs/toolkit";

// HACK: IMPORTING SLICES HERE
import themeSlice from "./slices/themeSlice";
import sideBarSlice from "./slices/SidebarSlice";
import sidebarLink from "./slices/activeSideBarLink";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    sidebar: sideBarSlice,
    sidebarLink: sidebarLink,
  },
});

export default store;
