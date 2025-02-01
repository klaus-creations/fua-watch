import { getDetails, getRecommendations, getReviews } from "../apiRequests";

export const detailsLoaders = async function ({ params }) {
  try {
    const detailData = await getDetailLoader(params);
    const recommendation = await getRecommendationLoader(params);
    const reviews = await getReviewsLoader(params);

    return { detailData, recommendation, reviews };
  } catch (error) {
    console.error("Failed to fetch details:", error);
    throw new Response("Error fetching details", { status: 500 });
  }
};

const getDetailLoader = async function (params) {
  const { detailType, id } = params;

  const res = await getDetails(detailType, id);
  return res;
};

const getRecommendationLoader = async function (params) {
  const { detailType, id } = params;
  const res = await getRecommendations(detailType, id);
  return res;
};

const getReviewsLoader = async function (params) {
  const { detailType, id } = params;
  const res = await getReviews(detailType, id);
  return res;
};
