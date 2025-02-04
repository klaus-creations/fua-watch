/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeActiveSidebarLink } from "../../features/slices/activeSideBarLink";
import { closeSidebar } from "../../utils/closeSdiebar";

export default function ButtonLink1({ linkName, linkPath, linkLogo }) {
  const activeSidebarLink = useSelector(
    (state) => state.sidebarLink.activeSidebarLink
  );

  const dispatch = useDispatch();

  return (
    <Link
      onClick={() => {
        dispatch(changeActiveSidebarLink(linkName));
        closeSidebar(dispatch);
      }}
      className={`flex items-center px-4 py-3 rounded-xs gap-2     text-gray-400  w-[90%] duration-300 ${
        activeSidebarLink === linkName
          ? "bg-sky-700"
          : "dark:bg-indigo-950/[.7] dark:hover:bg-indigo-950  hover:bg-indigo-900 bg-indigo-900/[.7]"
      }`}
      to={linkPath}
    >
      <img
        src={`/${linkLogo}`}
        alt="side bar link logo"
        className="size-4 text-white"
      />
      <span className="text-sm text-[10px] 2xl:text-xs tracking-[1px]">
        {linkName}
      </span>
    </Link>
  );
}
