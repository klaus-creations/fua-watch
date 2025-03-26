/* eslint-disable react/prop-types */
import { Star } from "lucide-react";
import { tmdbImagePath } from "../../utils/imagePath";

export default function SmallDescription(props) {
  const { poster, title, desc, vote, imdb, genres } = props;
  console.log(genres[0].name);
  genres.forEach((element) => {
    console.log(element);
  });
  return (
    <div className="w-full flex flex-col gap-3 p-5">
      <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-4">
        <img
          src={tmdbImagePath(poster)}
          alt="movie poster"
          className="w-[70%] lg:w-[30%]"
        />

        <div className="w-full lg:w-[60%] flex flex-col">
          <h1 className="text-base lg:text-xl font-bold text-sky-700">
            {title}
          </h1>
          <p className="text-xs lg:text-base tracking-[1px] text-gray-400">
            {desc}
          </p>

          <div className="w-full flex flex-col items-start gap-1">
            <span className="text-sm lg:text-base font-extrabold tracking-[1px] text-sky-700">
              Genres
            </span>
            {genres && (
              <div className="w-full flex gap-3 flex-wrap items-center">
                {genres.map((el) => {
                  return (
                    <span
                      key={el.id}
                      className="bg-slate-700 p-1 text-white rounded-lg"
                    >
                      {el?.name}
                    </span>
                  );
                })}
              </div>
            )}
          </div>

          <div className="w-full flex  items-center gap-3">
            <span className="text-sm lg:text-base font-bold tracking-[1px] text-gray-300">
              Average Rating:
            </span>

            <div className="flex items-center gap-2">
              <Star className="size-5 text-yellow-500" />
              <span className="text-sm lg:text-base font-bold text-gray-300">
                {vote}
              </span>
            </div>
          </div>
          {imdb && (
            <div className="flex items-center gap-2">
              <span className="text-xs lg:text-sm  text-gray-300">imdb Id</span>

              <span className="text-xs lg:text-sm text-gray-300">{imdb}</span>
            </div>
          )}
        </div>
      </div>

      <div className="w-full"></div>
    </div>
  );
}
