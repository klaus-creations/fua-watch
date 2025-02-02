import { useLoaderData } from "react-router-dom";
import ArtistComponent from "../components/PoplarArtistPages/ArtistComponent";

export default function PopularArtistsPage() {
  const data = useLoaderData();
  console.log(data?.results);
  return (
    <div className="w-full">
      <div className="w-full   flex flex-col gap-5 items-start px-4 lg:px-6 py-4 md:py-8">
        <div className="w-full flex items-center gap-4">
          <h2 className="text-xl font-bold lg:text-2xl tracking-[1px] text-sky-700">
            Popular Artists
          </h2>
        </div>

        <div className="w-full flex flex-wrap justify-between gap-y-5">
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
