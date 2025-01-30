import { Outlet } from "react-router-dom";

// HACK: IMPORTING LAYOUT COMPONENTS
import SidebarComponent from "../components/LayoutComponents/SidebarComponent";
import HeaderComponent from "../components/LayoutComponents/HeaderComponent";
import FooterComponent from "../components/LayoutComponents/FooterComponent";
import { useSelector } from "react-redux";

function LayoutPage() {
  const darkMode = useSelector((state) => state.theme.themeSelector);
  return (
    <div
      className={`${
        darkMode === "dark" && "dark"
      } w-full h-screen overflow-hidden relative dark:bg-gray-900 bg-gray-300 font-mono`}
    >
      {/* SIDE BAR */}
      <section className="w-[35%] lg:w-[15%] 2xl:w-[12%] h-full fixed top-0 left-0 bg-slate-700 dark:bg-slate-950 hidden lg:block">
        <SidebarComponent />
      </section>

      {/* MAIN + FOOTER + HEADER */}
      <section className="w-full lg:w-[85%] 2xl:w-[88%] h-full overflow-hidden absolute top-0 right-0 flex flex-col">
        <section className="w-full bg-slate-700 dark:bg-slate-950 px-5 lg:px-7">
          <HeaderComponent />
        </section>

        <section className="w-full h-[92%] overflow-y-auto flex-flex-col">
          <main className="w-full h-[150%]">
            <Outlet />
          </main>

          <FooterComponent />
        </section>
      </section>
    </div>
  );
}

export default LayoutPage;
