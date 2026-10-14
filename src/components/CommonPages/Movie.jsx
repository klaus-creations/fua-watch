import { Star } from "lucide-react";
import SmartImage from "../ui/SmartImage";
import { mediaType, releaseYear, tmdbImagePath } from "../../utils/imagePath";
import { useNavigate } from "react-router-dom";
import { detailRedirect } from "../../utils/detailRedirect";

/* eslint-disable react/prop-types */
const Movie = function ({ data }) {
  const navigate = useNavigate();
  const handleClick = function () {
    detailRedirect(navigate, mediaType(data), data.id);
  };
  const title = data?.title || data?.name || data?.original_title;
  const poster = tmdbImagePath(data?.poster_path, "w500");
  const rating = data?.vote_average;

  return (
    <button
      onClick={handleClick}
      className="group flex w-full cursor-pointer flex-col gap-3 text-left"
    >
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl bg-elevated ring-1 ring-line transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:ring-accent/40">
        <SmartImage
          src={poster}
          alt={title}
          className="size-full"
          imgClassName="transition-transform duration-700 ease-out group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {rating > 0 && (
          <span className="absolute left-2.5 top-2.5 flex items-center gap-1 rounded-lg bg-black/55 px-2 py-1 text-xs font-medium text-white backdrop-blur-md">
            <Star className="size-3 fill-amber-400 text-amber-400" />
            {rating.toFixed(1)}
          </span>
        )}

        <span className="absolute inset-x-3 bottom-3 translate-y-2 rounded-xl bg-white/15 py-2 text-center text-xs font-medium text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          View details
        </span>
      </div>

      <div className="flex flex-col gap-0.5 px-0.5">
        <h3 className="line-clamp-1 text-sm font-medium text-fg transition-colors group-hover:text-accent">
          {title}
        </h3>
        <span className="text-xs text-muted">
          {releaseYear(data) || "—"}
          {data?.media_type === "tv" || data?.first_air_date
            ? " · TV"
            : " · Movie"}
        </span>
      </div>
    </button>
  );
};

export default Movie;
