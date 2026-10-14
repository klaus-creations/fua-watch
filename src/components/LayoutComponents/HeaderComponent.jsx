import { useDispatch, useSelector } from "react-redux";
import { Menu, Moon, Search, Sun } from "lucide-react";

// HACK: IMPORTING DARKMODE SLICES
import { toggleSideBar } from "../../features/slices/SidebarSlice";
import { toggleDarkMode } from "../../features/slices/themeSlice";
import Logo from "../ui/Logo";
import { changeFeedType } from "../../features/slices/feedTypeSlice";
import { openSearch } from "../../features/slices/searchSlice";

const isMac =
  typeof navigator !== "undefined" &&
  /Mac|iPhone|iPad/.test(navigator.platform);

export default function HeaderComponent() {
  const isDarkMode = useSelector((state) => state.theme.themeSelector);
  const isSideBarOpened = useSelector((state) => state.sidebar.isOpened);

  const dispatch = useDispatch();

  const handleSideBarOpen = function () {
    dispatch(toggleSideBar(!isSideBarOpened));
  };

  const handleToggleTheme = function () {
    dispatch(toggleDarkMode(isDarkMode === "dark" ? "light" : "dark"));
  };

  return (
    <header className="flex w-full flex-col gap-3 py-3 md:flex-row md:items-center md:gap-4">
      <div className="flex items-center gap-3 md:contents">
        <button
          className="grid size-10 cursor-pointer place-items-center rounded-xl border border-line bg-surface/70 text-fg transition-colors hover:bg-elevated lg:hidden"
          onClick={handleSideBarOpen}
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </button>

        <div className="lg:hidden">
          <Logo compact />
        </div>

        <div className="ml-auto md:ml-0">
          <FeedType />
        </div>

        <div className="md:order-last">
          <button
            className="group relative grid size-10 cursor-pointer place-items-center overflow-hidden rounded-xl border border-line bg-surface/70 text-fg transition-colors hover:bg-elevated"
            onClick={handleToggleTheme}
            aria-label="Toggle theme"
          >
            <Sun className="absolute size-[18px] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute size-[18px] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
          </button>
        </div>
      </div>

      <button
        onClick={() => dispatch(openSearch())}
        className="group flex h-10 w-full cursor-pointer items-center gap-2.5 rounded-xl border border-line bg-surface/70 px-3 text-sm text-subtle transition-all hover:border-accent/30 hover:bg-surface hover:text-muted md:ml-auto md:max-w-sm"
      >
        <Search
          className="size-4 transition-colors group-hover:text-accent"
          strokeWidth={1.75}
        />
        <span className="flex-1 text-left">
          Search movies, shows, people...
        </span>
        <kbd className="hidden items-center gap-0.5 rounded-md border border-line bg-elevated px-1.5 py-0.5 text-[11px] font-medium text-subtle sm:flex">
          {isMac ? "⌘" : "Ctrl"} K
        </kbd>
      </button>
    </header>
  );
}

const FeedType = function () {
  const feedType = useSelector((state) => state.feedType.type);
  const dispatch = useDispatch();

  const options = [
    { value: "movie", label: "Movies" },
    { value: "tv", label: "TV" },
  ];

  return (
    <div className="relative flex h-10 shrink-0 items-center rounded-xl border border-line bg-surface/70 p-1">
      <span
        className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-lg bg-gradient-accent shadow-md shadow-accent/30 transition-transform duration-300 ease-out ${
          feedType === "tv" ? "translate-x-full" : ""
        }`}
      />
      {options.map((el) => (
        <button
          key={el.value}
          onClick={() => dispatch(changeFeedType(el.value))}
          className={`relative z-10 w-16 cursor-pointer rounded-lg text-sm font-medium transition-colors duration-300 ${
            feedType === el.value
              ? "text-on-accent"
              : "text-muted hover:text-fg"
          }`}
        >
          {el.label}
        </button>
      ))}
    </div>
  );
};
