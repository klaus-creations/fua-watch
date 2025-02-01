/* eslint-disable react/prop-types */
import Movie from "../CommonPages/Movie";
import PageSlider from "../CommonPages/PageSlider";
import { useDispatch, useSelector } from "react-redux";
import { setPopularMoviesTVPage } from "../../features/slices/pageSlice";

export default function PopularTvMovieComponent({ data }) {
  const activeSlide = useSelector((state) => state.page.popularMoviesTv);
  const dispatch = useDispatch();
  const handlePopularTVMovieLeft = function () {
    if (activeSlide > 1) {
      dispatch(setPopularMoviesTVPage(activeSlide - 1));
    }
  };

  const handlePopularTVMovieRight = function () {
    if (activeSlide < 5) {
      dispatch(setPopularMoviesTVPage(activeSlide + 1));
    }
  };

  return (
    <div className="w-full  dark:bg-indigo-950 bg-indigo-900 flex flex-col gap-5 items-start px-4 lg:px-6 py-4 md:py-8">
      <div className="w-full flex items-center gap-4">
        <h2 className="text-xl font-bold lg:text-2xl tracking-[1px] text-sky-700">
          Popular
        </h2>

        <button className="text-white font-bold shadow-xl shadow-sky-700/[.5] text-base lg:text-xl px-4 py-1">
          Day
        </button>
      </div>

      <div className="w-full flex overflow-x-auto gap-5">
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
