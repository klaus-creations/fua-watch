export const tmdbImagePath = function (name, size = "original") {
  if (!name) return null;
  return `https://image.tmdb.org/t/p/${size}/${name}`;
};

// HACK: TMDB DOESN'T ALWAYS SEND media_type, TV ITEMS HAVE first_air_date
export const mediaType = function (data) {
  if (data?.media_type === "tv" || data?.first_air_date) return "tv";
  return "movie";
};

export const releaseYear = function (data) {
  const date = data?.release_date || data?.first_air_date;
  return date ? date.slice(0, 4) : "";
};
