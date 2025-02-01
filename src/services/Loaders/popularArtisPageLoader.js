import { getPopularArtist } from "../apiRequests";

export const popularArtistsLoader = async function () {
  try {
    const data = await getPopularArtist();
    return data;
  } catch (error) {
    console.log(error);
    throw new Response("Error fetching popular Artists", { status: 500 });
  }
};
