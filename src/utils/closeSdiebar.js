import { toggleSideBar } from "../features/slices/SidebarSlice";

export const closeSidebar = function (dispatch) {
  dispatch(toggleSideBar(false));
};
