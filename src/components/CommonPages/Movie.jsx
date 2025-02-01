import { Star } from "lucide-react";
import { tmdbImagePath } from "../../utils/imagePath";
import { useNavigate } from "react-router-dom";
import { detailRedirect } from "../../utils/detailRedirect";

/* eslint-disable react/prop-types */
const Movie = function ({ data }) {
  const navigate = useNavigate();
  const handleClick = function () {
    detailRedirect(navigate, "movie", data.id);
  };
  return (
    <div
      onClick={handleClick}
      className="w-[90%] sm:w-[40%] dark:bg-indigo-950 bg-indigo-900 p-2  md:w-[30%] lg:w-[26%] 2xl:w-[23%] flex flex-col items-start justify-center shrink-0 relative"
    >
      <img
        src={tmdbImagePath(data.poster_path)}
        alt="trending movies"
        className="w-full hover:scale-[1.03] hover:-rotate-[2deg] duration-300 hover:grayscale cursor-pointer"
      />

      <div className="w-full flex gap-4 justify-between relative z-10">
        <h3 className="text-xs md:text-base text-white p-2 font-bold tracking-[1px] rounded-2xl">
          {data.title}
        </h3>

        <div className="flex items-center gap-1 text-white text-xs md:text-base">
          <Star className="text-yellow-500" />
          {data.vote_average}
        </div>
      </div>
    </div>
  );
};

export default Movie;
