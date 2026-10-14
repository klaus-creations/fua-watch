import { Flame } from "lucide-react";
import MovieGrid from "../components/CommonPages/MovieGrid";
import PageSlider from "../components/CommonPages/PageSlider";
import PageHeader from "../components/ui/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import { setTrendingPage } from "../features/slices/pageSlice";
import { useLoaderData } from "react-router-dom";

export default function TrendingPage() {
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
    <div className="flex w-full flex-col gap-10 px-4 pt-10 md:px-8">
      <PageHeader
        icon={Flame}
        eyebrow="Today"
        title="Trending"
        description="The TV shows everyone is talking about right now, updated daily."
      />

      <MovieGrid data={data} />

      <PageSlider
        activeSlide={activeSlide}
        onHandleLeft={handlePopularTVMovieLeft}
        onHandleRight={handlePopularTVMovieRight}
      />
    </div>
  );
}
