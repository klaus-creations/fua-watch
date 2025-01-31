import { configureStore } from "@reduxjs/toolkit";

// HACK: IMPORTING SLICES HERE
import themeSlice from "./slices/themeSlice";
import sideBarSlice from "./slices/SidebarSlice";
import sidebarLink from "./slices/activeSideBarLink";
import pageSlice from "./slices/pageSlice";
import feedTypeSlice from "./slices/feedTypeSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    sidebar: sideBarSlice,
    sidebarLink: sidebarLink,
    page: pageSlice,
    feedType: feedTypeSlice,
  },
});

export default store;
