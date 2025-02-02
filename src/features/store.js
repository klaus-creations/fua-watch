import { configureStore } from "@reduxjs/toolkit";

// HACK: IMPORTING SLICES HERE
import themeSlice from "./slices/themeSlice";
import sideBarSlice from "./slices/SidebarSlice";
import sidebarLink from "./slices/activeSideBarLink";
import pageSlice from "./slices/pageSlice";
import feedTypeSlice from "./slices/feedTypeSlice";
import searchSlice from "./slices/searchSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    sidebar: sideBarSlice,
    sidebarLink: sidebarLink,
    page: pageSlice,
    feedType: feedTypeSlice,
    search: searchSlice,
  },
});

export default store;
