import Movie from "../components/CommonPages/Movie";
import PageSlider from "../components/CommonPages/PageSlider";
import { useDispatch, useSelector } from "react-redux";
import { setTrendingPage } from "../features/slices/pageSlice";
import { useLoaderData } from "react-router-dom";

export default function TopRatedPage() {
  const data = useLoaderData()?.results;

  const activeSlide = useSelector((state) => state.page.popularMoviesTv);
  const dispatch = useDispatch();
  const handlePopularTVMovieLeft = function () {
    if (activeSlide > 1) {
      dispatch(setTrendingPage(activeSlide - 1));
    }
  };

  const handlePopularTVMovieRight = function () {
    if (activeSlide < 5) {
      dispatch(setTrendingPage(activeSlide + 1));
    }
  };
  return (
    <div className="w-full flex flex-col gap-5 items-start px-4 lg:px-6 py-4 md:py-8">
      <div className="w-full flex items-center gap-4">
        <h2 className="text-xl font-bold lg:text-2xl tracking-[1px] text-sky-700">
          Trendings
        </h2>
      </div>

      <div className="w-full flex flex-wrap gap-10 gap-y-5">
        {data.map((el) => {
          return <Movie key={el.id} data={el} />;
        })}
      </div>

      <PageSlider
        activeSlide={activeSlide}
        onHandleLeft={handlePopularTVMovieLeft}
        onHandleRight={handlePopularTVMovieRight}
      />
    </div>
  );
}
