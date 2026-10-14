/* eslint-disable react/prop-types */
import MovieRow from "../CommonPages/MovieRow";
import PageSlider from "../CommonPages/PageSlider";
import { useDispatch, useSelector } from "react-redux";
import { setPopularMoviesTVPage } from "../../features/slices/pageSlice";

export default function PopularTvMovieComponent({ data }) {
  const activeSlide = useSelector((state) => state.page.popularMoviesTv);
  const feedType = useSelector((state) => state.feedType.type);
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
    <div className="flex w-full flex-col gap-2">
      <MovieRow
        eyebrow="Everyone's watching"
        title={feedType === "tv" ? "Popular TV Shows" : "Popular Movies"}
        data={data}
      />

      <div className="flex px-4 md:px-8">
        <PageSlider
          activeSlide={activeSlide}
          onHandleLeft={handlePopularTVMovieLeft}
          onHandleRight={handlePopularTVMovieRight}
        />
      </div>
    </div>
  );
}
