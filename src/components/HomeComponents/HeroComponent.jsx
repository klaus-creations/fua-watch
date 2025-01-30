import { tmdbImagePath } from "../../utils/imagePath";

/* eslint-disable react/prop-types */
function HeroComponent({ data }) {
  return (
    <div className="w-full h-screen overflow-hidden object-contain bg-red-400 relative">
      {/* <h1 className="text-white font-bold text-5xl">{data?.original_title}</h1> */}
      <img
        src={tmdbImagePath(data.backdrop_path)}
        alt="todays trending image"
        className="size-full object-cover"
      />
      <div
        className="w-full h-full absolute inset-0 z-10 bg-black/[.5] bg-linear-to-bl from-slate-950/[.9] via-gray-950/[.8] 
      to-black/[.6]"
      ></div>

      <HeroCenter data={data} />
    </div>
  );
}

const HeroCenter = function ({ data }) {
  return (
    <div className="w-[100%] sm:w-[90%] md:w-[75%] lg:w-[60%] 2xl:w-[40%] px-4 lg:px-6 flex items-center  absolute top-[10%] md:top-[15%] lg:top-[20%] left-[50%] md:left-[40%] lg:left-[30%] -translate-x-[50%] bg-indigo-950/[.3] z-20 py-4 md:py-8 lg:py-10   shadow-lg shadow-sky-700 flex-wrap">
      <img
        className="w-[50%]"
        src={tmdbImagePath(data.poster_path)}
        alt="poster path of the image"
      />
      <div className="w-[50%] flex flex-col items-start p-2 gap-2">
        <h3 className="text-base md:text-xl text-sky-700 font-bold tracking-[1px]">
          {data.original_title}
        </h3>

        <p className="text-[8px] tracking-[0px] md:tracking-[1px] text-gray-200">
          {data.overview}
        </p>

        <div className="flex items-center gap-2">
          <span className="text-gray-300 text-xs tracking-[0px] md:tracking-[1px]">
            Released Date
          </span>
          <span className="text-gray-200 text-xs tracking-[0px] md:tracking-[1px]">
            {data.release_date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
