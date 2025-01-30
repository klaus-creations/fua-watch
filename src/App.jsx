// HACK: IMPORTING THIRD PARTY LIBRARIES
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// HACK: IMPORTING EVERY ROUTES HERE
import HomePage from "./pages/HomePage";
import LayoutPage from "./pages/LayoutPage";
import FavoritesPage from "./pages/FavoritesPage";

// HACK: IMPORT REDUX JS STORE
import store from "./features/store";
import { Provider } from "react-redux";
import TrendingPage from "./pages/TrendingPage";
import TopRatedPage from "./pages/TopRatedPage";
import PopularArtistsPage from "./pages/PopularArtistsPage";
import AboutPage from "./pages/AboutPage";

const browserRouter = createBrowserRouter([
  {
    element: <LayoutPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/favorites", element: <FavoritesPage /> },
      { path: "/trending", element: <TrendingPage /> },
      { path: "/top-rated", element: <TopRatedPage /> },
      { path: "/popular-artists", element: <PopularArtistsPage /> },
      { path: "/about", element: <AboutPage /> },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={browserRouter}></RouterProvider>
    </Provider>
  );
}

export default App;
