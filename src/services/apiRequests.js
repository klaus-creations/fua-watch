const API_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

import store from "../features/store";
// NOTE: ALL THE API REQUESTS TO THE TMDB API

// HACK: GETTING TRENDING MOVIES AND TV SERIESES
export const getTrending = async function (
  type,
  time,
  params = {},
  headers = {}
) {
  // Construct query parameters
  const queryString = new URLSearchParams({
    ...params,
    api_key: API_KEY,
    language: "en-US",
  }).toString();

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
    `${API_URL}/trending/${type}/${time}?${queryString}&page=2`,
    options
  );

  if (!res.ok) {
    throw new Error(`Error: ${res.statusText}`);
  }

  return await res.json(); // Parse response as JSON
};

// HACK: GETTING LATEST MOVIES
export const getPopularMovieTvPeopleList = async function (
  type,
  params = {},
  headers = {
    "Content-Type": "application/json",
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2MzMjgxNDcyYzViMDc5YWUyZjZiZjlkMWMyNmYwMyIsIm5iZiI6MTczNzk3NTIxNy42MTIsInN1YiI6IjY3OTc2NWIxMTZmMGQ5NjBkZjIzYWUxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XSa_hqkD2AF2N1UlycXQrac97jwm0bFU32KWrBVTSu0",
  }
) {
  const state = store.getState();
  const pageParam = state.page.popularMoviesTv;

  const queryString = new URLSearchParams({
    ...params,
    api_key: API_KEY,
    language: "en-US",
  }).toString();

  const options = {
    method: "GET",
    headers: { ...headers },
  };

  const res = await fetch(
    `${API_URL}/${type}/popular?${queryString}&page=${pageParam}`,
    options
  );

  if (!res.ok) {
    throw new Error(`Error: ${res.statusText}`);
  }

  return await res.json();
};

// HACK: GETTING DETAILS OF MOVIE | TV SERIES | PEOPLE
export const getDetails = async function (
  type,
  id,
  params = {},
  headers = {
    accept: "application/json",
  }
) {
  const queryString = new URLSearchParams({
    ...params,
    api_key: API_KEY,
    language: "en-US",
  }).toString();

  const options = {
    method: "GET",
    headers: { ...headers },
  };

  const res = await fetch(`${API_URL}/${type}/${id}?${queryString}`, options);

  if (!res.ok) {
    throw new Error(`Error: ${res.statusText}`);
  }

  return await res.json();
};

// HACK: GETTING UPCOMING MOVIES
export const getUpComing = async function (
  params = {},
  headers = {
    accept: "application/json",
  }
) {
  const queryString = new URLSearchParams({
    ...params,
    api_key: API_KEY,
    language: "en-US",
  }).toString();

  const options = {
    method: "GET",
    headers: { ...headers },
  };

  const res = await fetch(`${API_URL}/movie/upcoming?${queryString}`, options);

  if (!res.ok) {
    throw new Error(`Error: ${res.statusText}`);
  }

  return await res.json();
};

// HACK: GETTING TOPRATED MOVIES | TV SERIESE
export const getTopRated = async function (
  type,
  params = {},
  headers = {
    accept: "application/json",
  }
) {
  const queryString = new URLSearchParams({
    ...params,
    api_key: API_KEY,
    language: "en-US",
  });

  const options = {
    method: "GET",
    headers: {
      ...headers,
    },
  };
  const res = await fetch(
    `${API_URL}/${type}/top_rated?${queryString}`,
    options
  );
  if (!res.ok) {
    throw new Error(`Error: ${res.statusText}`);
  }

  return await res.json();
};

// HACK: GETTING POPULAR ARTISTS
export const getPopularArtist = async function (params = {}, headers = {}) {
  const queryString = new URLSearchParams({
    ...params,
    api_key: API_KEY,
    language: "en-US",
  });

  const options = {
    method: "GET",
    headers: {
      ...headers,
    },
  };
  const res = await fetch(`${API_URL}/person/popular?${queryString}`, options);
  if (!res.ok) {
    throw new Error(`Error: ${res.statusText}`);
  }

  return await res.json();
};

// HACK: GETTING MOVIE RECOMMENADTIONS
export const getRecommendations = async function (
  type,
  id,
  params = {},
  headers = {}
) {
  const queryString = new URLSearchParams({
    ...params,
    api_key: API_KEY,
    language: "en-US",
    page: 1,
  });

  const options = {
    method: "GET",
    headers: {
      ...headers,
      accept: "application/json",
    },
  };

  const res = await fetch(
    `${API_URL}/${type}/${id}/recommendations?${queryString}`,
    options
  );
  if (!res.ok) {
    throw new Response("Error while fetching recommendation");
  }

  return res.json();
};

// HACK: GETTING MOVIE REVIEWS
export const getReviews = async function (type, id, params = {}, headers = {}) {
  const queryString = new URLSearchParams({
    ...params,
    api_key: API_KEY,
    language: "en-US",
    page: 1,
  });

  const options = {
    method: "GET",
    headers: {
      ...headers,
      accept: "application/json",
    },
  };

  const res = await fetch(
    `${API_URL}/${type}/${id}/reviews?${queryString}`,
    options
  );
  if (!res.ok) {
    throw new Response("Error while fetching recommendation");
  }

  return res.json();
};
