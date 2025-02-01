import { useLoaderData } from "react-router-dom";
import PageSlider from "../components/CommonPages/PageSlider";
import ArtistComponent from "../components/PoplarArtistPages/ArtistComponent";

export default function PopularArtistsPage() {
  const data = useLoaderData();
  return (
    <div className="w-full">
      <div className="w-full  dark:bg-indigo-950 flex flex-col gap-5 items-start px-4 lg:px-6 py-4 md:py-8">
        <div className="w-full flex items-center gap-4">
          <h2 className="text-xl font-bold lg:text-2xl tracking-[1px] text-sky-700">
            Trendings
          </h2>

          <button className="text-white font-bold shadow-xl shadow-sky-700/[.5] text-base lg:text-xl px-4 py-1">
            Day
          </button>
        </div>

        <div className="w-full flex flex-wrap gap-10 gap-y-5">
          {data?.results.map((el) => {
            return <ArtistComponent key={el.id} data={el} />;
          })}
        </div>

        {/* <PageSlider
        activeSlide={activeSlide}
        onHandleLeft={handlePopularTVMovieLeft}
        onHandleRight={handlePopularTVMovieRight}
      /> */}
      </div>
    </div>
  );
}
