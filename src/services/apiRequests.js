const API_URL = "https://api.themoviedb.org/3";
// NOTE: ALL THE API REQUESTS TO THE TMDB API

// HACK: GETTING TRENDING MOVIES AND TV SERIESES
export const getTrending = async function (type, params = {}, headers = {}) {
  // Construct query parameters
  const queryString = new URLSearchParams(params).toString();

  // Define fetch options
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2MzMjgxNDcyYzViMDc5YWUyZjZiZjlkMWMyNmYwMyIsIm5iZiI6MTczNzk3NTIxNy42MTIsInN1YiI6IjY3OTc2NWIxMTZmMGQ5NjBkZjIzYWUxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XSa_hqkD2AF2N1UlycXQrac97jwm0bFU32KWrBVTSu0", // Merge any custom headers
    },
    ...headers,
  };

  // Make the API request
  const res = await fetch(
    `${API_URL}/trending/${type}/day?${queryString}language=en-US`,
    options
  );

  if (!res.ok) {
    throw new Error(`Error: ${res.statusText}`);
  }

  return await res.json(); // Parse response as JSON
};
