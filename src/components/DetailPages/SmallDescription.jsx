/* eslint-disable react/prop-types */
import { tmdbImagePath } from "../../utils/imagePath";

export default function SmallDescription(props) {
  const { poster, title, desc } = props;
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center">
        <img
          src={tmdbImagePath(poster)}
          alt="movie poster"
          className="w-[70%] lg:w-[47%]"
        />

        <div className="w-full lg:w-[45%] flex flex-col">
          <h1 className="text-base lg:text-xl font-bold text-white">{title}</h1>
          <p className="text-[6px] text-white">{desc}</p>
        </div>
      </div>

      <div className="w-full"></div>
    </div>
  );
}
