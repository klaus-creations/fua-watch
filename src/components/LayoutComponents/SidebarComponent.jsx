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
    <aside className="flex h-full w-full flex-col gap-8 border-r border-line bg-surface/80 px-4 py-5 backdrop-blur-xl">
      <div className="flex items-center justify-between px-1.5">
        <Logo />
        {isSideBarOpened && (
          <button
            onClick={() => dispatch(toggleSideBar(false))}
            className="grid size-9 cursor-pointer place-items-center rounded-xl text-muted hover:bg-elevated hover:text-fg lg:hidden"
            aria-label="Close menu"
          >
            <X className="size-5" />
          </button>
        )}
      </div>

      <nav className="flex flex-col gap-1">
        <span className="mb-2 px-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-subtle">
          Browse
        </span>
        {sidebarLinks.map((el) => {
          return (
            <ButtonLink1
              key={el.id}
              linkName={el.name}
              linkPath={el.to}
              LinkIcon={el.icon}
            />
          );
        })}
      </nav>

      <div className="mt-auto overflow-hidden rounded-2xl border border-line bg-elevated/60 p-4">
        <div className="mb-3 h-1 w-10 rounded-full bg-gradient-accent" />
        <p className="font-display text-sm font-normal text-fg">
          Discover something new
        </p>
        <p className="mt-1 text-xs leading-relaxed text-muted">
          Millions of movies, shows and people, powered by TMDB.
        </p>
      </div>
    </aside>
  );
}
