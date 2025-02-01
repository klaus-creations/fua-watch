// import { defer } from "react-router-dom";

import {
  getPopularMovieTvPeopleList,
  getTrending,
  getUpComing,
} from "../apiRequests";
import store from "../../features/store";

export async function homePageLoader() {
  // const trendTime = useSelector(state => state.)
  const popular = await popularTVMoviePeopleLoader();
  const trend = await trendingLoader();
  const upcoming = await upcomingLoaders();

  return { popular, trend, upcoming };
}

const popularTVMoviePeopleLoader = async function () {
  const state = store.getState();
  const feedType = state.feedType.type;

  const values = await getPopularMovieTvPeopleList(feedType);
  return values;
};

const trendingLoader = async function () {
  const state = store.getState();
  const feedType = state.feedType.type;
  const values = await getTrending(feedType, "day");
  return values;
};

const upcomingLoaders = async function () {
  const values = await getUpComing();
  return values;
};
