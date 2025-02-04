import { Outlet, useNavigation } from "react-router-dom";

// HACK: IMPORTING LAYOUT COMPONENTS
import SidebarComponent from "../components/LayoutComponents/SidebarComponent";
import HeaderComponent from "../components/LayoutComponents/HeaderComponent";
import FooterComponent from "../components/LayoutComponents/FooterComponent";
import { useDispatch, useSelector } from "react-redux";
import SearchComponent from "../components/CommonPages/SearchComponent";
import { closeSidebar } from "../utils/closeSdiebar";
import PageLoading from "../components/CommonPages/PageLoading";

function LayoutPage() {
  const search = useSelector((state) => state.search.word);
  const isSideBarOpened = useSelector((state) => state.sidebar.isOpened);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  const darkMode = useSelector((state) => state.theme.themeSelector);
  return (
    <div
      className={`${
        darkMode === "dark" && "dark"
      } w-full h-screen overflow-hidden relative dark:bg-gray-900 bg-gray-300 font-mono`}
    >
      {/* SIDE BAR FOR LARGER SCREEN  */}
      <section className="w-[35%] lg:w-[15%] 2xl:w-[12%] h-full fixed top-0 left-0 bg-slate-700 dark:bg-slate-950 hidden lg:block">
        <SidebarComponent />
      </section>

      {/* SIDEBAR FOR SMALLER SCREENS */}
      {isSideBarOpened && (
        <section className="w-full h-full fixed inset-0 flex justify-start z-[100000] lg:hidden duration-300 bg-black/[.5]">
          <div className="w-[60%] sm:w-[50%] md:w-[40%] h-full fixed top-0 left-0 bg-slate-700 dark:bg-slate-950 ">
            <SidebarComponent />
          </div>
          <div
            className="w-[40%] sm:w-[50%] md:w-[60%] h-full absolute top-0 right-0"
            onClick={() => closeSidebar(dispatch)}
          ></div>
        </section>
      )}

      {/* MAIN + FOOTER + HEADER */}
      <section className="w-full lg:w-[85%] 2xl:w-[88%] h-full overflow-hidden absolute top-0 right-0 flex flex-col">
        <section className="w-full z-[1000] bg-slate-700 dark:bg-slate-950/[.4] px-5 lg:px-7">
          <HeaderComponent />
        </section>

        <section className="w-full overflow-y-auto flex flex-col gap-10 md:gap-14 lg:gap-16">
          {!isLoading ? (
            <>
              <main className="w-full">
                <Outlet />
              </main>
              <FooterComponent />{" "}
            </>
          ) : (
            <PageLoading value={"Loading"} />
          )}
        </section>
      </section>
      {search.length > 3 && <SearchComponent />}
    </div>
  );
}

export default LayoutPage;
