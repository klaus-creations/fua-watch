/* eslint-disable react/prop-types */
import { tmdbImagePath } from "../../utils/imagePath";

export default function ArtistComponent({ data }) {
  return (
    <div className="w-[45%] dark:bg-indigo-950 bg-indigo-900 p-2  md:w-[30%] lg:w-[26%] 2xl:w-[23%] flex flex-col items-center justify-center shrink-0 relative pt-5 md:pt-5 shadow-lg shadow-sky-700 rounded-xl gap-1">
      <img
        src={tmdbImagePath(data.profile_path)}
        alt="trending movies"
        className="w-[90%] hover:scale-[1.03] hover:-rotate-[2deg] duration-300  cursor-pointer rounded-xl"
      />

      <div className="w-full flex justify-between relative z-10 items-center">
        <h3 className="text-xs md:text-base text-white p-2 font-bold tracking-[1px] rounded-2xl">
          {data.original_name}
        </h3>

        <p className="text-xs md:text-base tracking-[.5px] text-gray-200">
          {data.known_for_department}
        </p>
      </div>
    </div>
  );
}
