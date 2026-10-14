import { useEffect } from "react";
import {
  Outlet,
  ScrollRestoration,
  useLocation,
  useNavigation,
  useRevalidator,
} from "react-router-dom";

// HACK: IMPORTING LAYOUT COMPONENTS
import SidebarComponent from "../components/LayoutComponents/SidebarComponent";
import HeaderComponent from "../components/LayoutComponents/HeaderComponent";
import FooterComponent from "../components/LayoutComponents/FooterComponent";
import { useDispatch, useSelector } from "react-redux";
import SearchComponent from "../components/CommonPages/SearchComponent";
import { closeSidebar } from "../utils/closeSdiebar";
import { closeSearch, openSearch } from "../features/slices/searchSlice";
import PageLoading from "../components/CommonPages/PageLoading";
import { RouteSkeleton } from "../components/CommonPages/Skeletons";

function LayoutPage() {
  const isSearchOpen = useSelector((state) => state.search.isOpen);
  const isSideBarOpened = useSelector((state) => state.sidebar.isOpened);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const location = useLocation();

  const revalidator = useRevalidator();

  const isLoading = navigation.state === "loading";
  const isRevalidating = revalidator.state === "loading";
  // NOTE: SHOW A SKELETON OF THE NEXT PAGE WHILE ITS LOADER RUNS
  const nextPath = navigation.location?.pathname;
  const isChangingPage =
    isLoading && nextPath && nextPath !== location.pathname;

  const darkMode = useSelector((state) => state.theme.themeSelector);

  // NOTE: THE THEME LIVES ON <html> SO THE BODY, SCROLLBARS AND MODALS FOLLOW IT
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode === "dark");
  }, [darkMode]);

  // NOTE: CTRL+K / CMD+K TOGGLES THE SEARCH DIALOG FROM ANYWHERE, "/" OPENS IT
  useEffect(() => {
    const handleKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        dispatch(isSearchOpen ? closeSearch() : openSearch());
      } else if (
        e.key === "/" &&
        !isSearchOpen &&
        !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)
      ) {
        e.preventDefault();
        dispatch(openSearch());
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [dispatch, isSearchOpen]);

  return (
    <div className="relative min-h-screen bg-bg font-sans text-fg">
      {/* AMBIENT GLOW */}
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-0 h-[480px] bg-[radial-gradient(60%_60%_at_70%_0%,var(--glow),transparent)]" />

      {(isLoading || isRevalidating) && <PageLoading />}

      {/* SIDE BAR FOR LARGER SCREEN  */}
      <section className="fixed inset-y-0 left-0 z-40 hidden w-64 lg:block">
        <SidebarComponent />
      </section>

      {/* SIDEBAR FOR SMALLER SCREENS */}
      {isSideBarOpened && (
        <section className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 animate-fade-in bg-black/50 backdrop-blur-sm"
            onClick={() => closeSidebar(dispatch)}
          />
          <div className="absolute inset-y-0 left-0 w-72 max-w-[85%] animate-slide-in bg-surface shadow-2xl">
            <SidebarComponent />
          </div>
        </section>
      )}

      {/* MAIN + FOOTER + HEADER */}
      <section className="relative flex min-h-screen flex-col lg:pl-64">
        <div className="sticky top-0 z-30 border-b border-line bg-bg/70 px-4 backdrop-blur-xl md:px-8">
          <HeaderComponent />
        </div>

        <main
          key={isChangingPage ? nextPath : location.pathname}
          className={`w-full animate-fade-up pb-16 transition-opacity duration-300 ${
            isRevalidating || (isLoading && !isChangingPage)
              ? "opacity-60"
              : "opacity-100"
          }`}
        >
          {isChangingPage ? <RouteSkeleton pathname={nextPath} /> : <Outlet />}
        </main>

        <FooterComponent />
      </section>

      {isSearchOpen && <SearchComponent />}

      <ScrollRestoration />
    </div>
  );
}

export default LayoutPage;
