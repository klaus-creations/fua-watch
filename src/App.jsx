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
import DetailsPage from "./pages/DetailsPage";

// HACK: IMPORTING LOADERS
import { homePageLoader } from "./services/Loaders/homePageLoaders";
import { detailsLoaders } from "./services/Loaders/detailPageLoader";
import { trendingPageLoader } from "./services/Loaders/trendingPageLoaders";
import { topRatedPageLoader } from "./services/Loaders/topRatedPageLoader";
import { popularArtistsLoader } from "./services/Loaders/popularArtisPageLoader";

// HACK: SKELETONS SHOWN WHILE A PAGE'S FIRST LOAD RUNS
import {
  DetailsSkeleton,
  GridSkeleton,
  HomeSkeleton,
} from "./components/CommonPages/Skeletons";

// HACK: IMPORT REDUX JS STORE
import store from "./features/store";
import { Provider } from "react-redux";

const browserRouter = createBrowserRouter([
  {
    element: <LayoutPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: homePageLoader,
        hydrateFallbackElement: <HomeSkeleton />,
      },
      { path: "/favorites", element: <FavoritesPage /> },
      {
        path: "/trending",
        element: <TrendingPage />,
        loader: trendingPageLoader,
        hydrateFallbackElement: <GridSkeleton />,
      },
      {
        path: "/top-rated",
        element: <TopRatedPage />,
        loader: topRatedPageLoader,
        hydrateFallbackElement: <GridSkeleton />,
      },
      {
        path: "/popular-artists",
        element: <PopularArtistsPage />,
        loader: popularArtistsLoader,
        hydrateFallbackElement: <GridSkeleton ratio="aspect-[3/4]" />,
      },
      { path: "/about", element: <AboutPage /> },
      {
        path: "/details/:detailType/:id",
        element: <DetailsPage />,
        loader: detailsLoaders,
        hydrateFallbackElement: <DetailsSkeleton />,
      },
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
