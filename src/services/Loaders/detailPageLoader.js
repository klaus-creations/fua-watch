import { getDetails } from "../apiRequests";

export const detailsLoaders = async function ({ params }) {
  try {
    const detailData = await getDetailLoader(params);
    return { detailData };
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
