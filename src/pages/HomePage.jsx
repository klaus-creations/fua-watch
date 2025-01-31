import { useLoaderData, useRevalidator } from "react-router-dom";
import HeroComponent from "../components/HomeComponents/HeroComponent";
import TrendingsComponent from "../components/HomeComponents/TrendingsComponent";
import PopularTvMovieComponent from "../components/HomeComponents/PopularTvMovieComponent";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Upcomings from "../components/HomeComponents/UpComming";

function HomePage() {
  const { popular, trend, upcoming } = useLoaderData();
  const revalidator = useRevalidator();
  const pageparam = useSelector((state) => state.popularMoviesTv);
  console.log(upcoming);
  console.log(popular);

  useEffect(() => {
    revalidator.revalidate(); // Re-run the loader whenever pageParam changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageparam]);

  return (
    <div className="size-full flex flex-col gap-32">
      <HeroComponent data={trend?.results[0]} />
      <TrendingsComponent data={trend?.results} />
      <PopularTvMovieComponent data={popular?.results} />
      <Upcomings data={upcoming?.results} />
    </div>
  );
}

export default HomePage;
