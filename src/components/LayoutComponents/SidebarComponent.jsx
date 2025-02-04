import { X } from "lucide-react";
import { sidebarLinks } from "../../constants";
import ButtonLink1 from "../ui/ButtonLink1";
import Logo from "../ui/Logo";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../../features/slices/SidebarSlice";

export default function SidebarComponent() {
  const isSideBarOpened = useSelector((state) => state.sidebar.isOpened);
  const dispatch = useDispatch();
  return (
    <aside className="w-full h-full flex flex-col relative">
      <Logo />

      {isSideBarOpened && (
        <button
          onClick={() => dispatch(toggleSideBar(false))}
          className="  absolute top-2 right-2"
        >
          <X className="size-5 text-white" />
        </button>
      )}

      <div className="w-full flex flex-col items-center gap-3">
        {sidebarLinks.map((el) => {
          return (
            <ButtonLink1
              key={el.id}
              linkName={el.name}
              linkPath={el.to}
              linkLogo={el.icon}
            />
          );
        })}
      </div>
    </aside>
  );
}
