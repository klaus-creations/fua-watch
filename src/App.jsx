// HACK: IMPORTING THIRD PARTY LIBRARIES
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// HACK: IMPORTING EVERY ROUTES HERE
import LayoutPage from "./pages/LayoutPage";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import TopRatedPage from "./pages/TopRatedPage";
import PopularArtistsPage from "./pages/PopularArtistsPage";
import TrendingPage from "./pages/TrendingPage";
import AboutPage from "./pages/AboutPage";

// HACK: IMPORTING LOADERS
import { trendingLoader } from "./services/Loaders/trendingLoader";

// HACK: IMPORT REDUX JS STORE
import store from "./features/store";
import { Provider } from "react-redux";

const browserRouter = createBrowserRouter([
  {
    element: <LayoutPage />,
    children: [
      { path: "/", element: <HomePage />, loader: trendingLoader },
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
