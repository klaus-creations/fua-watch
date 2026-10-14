/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { closeSidebar } from "../../utils/closeSdiebar";

export default function ButtonLink1({ linkName, linkPath, LinkIcon }) {
  const dispatch = useDispatch();

  return (
    <NavLink
      to={linkPath}
      end={linkPath === "/"}
      onClick={() => closeSidebar(dispatch)}
      className={({ isActive }) =>
        `group relative flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-200 ${
          isActive
            ? "bg-accent/10 text-accent"
            : "text-muted hover:bg-elevated hover:text-fg"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span
            className={`absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-gradient-accent transition-all duration-300 ${
              isActive ? "opacity-100" : "opacity-0 -translate-x-1"
            }`}
          />
          <LinkIcon
            className="size-[18px] shrink-0 transition-transform duration-200 group-hover:scale-110"
            strokeWidth={isActive ? 2.4 : 2}
          />
          <span>{linkName}</span>
        </>
      )}
    </NavLink>
  );
}
