import { getTopRated } from "../apiRequests";

export const topRatedPageLoader = async function () {
  const values = await getTopRated("movie");
  return values;
};
