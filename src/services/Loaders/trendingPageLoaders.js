import { getTrending } from "../apiRequests";

export const trendingPageLoader = async function () {
  const values = await getTrending("tv", "day");
  return values;
};
