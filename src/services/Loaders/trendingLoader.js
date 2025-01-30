import { getTrending } from "../apiRequests";

export const trendingLoader = async function () {
  const values = await getTrending("movie");
  return values;
};
