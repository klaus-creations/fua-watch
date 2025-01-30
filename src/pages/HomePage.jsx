import { useLoaderData } from "react-router-dom";
import HeroComponent from "../components/HomeComponents/HeroComponent";
import TrendingsComponent from "../components/HomeComponents/TrendingsComponent";

function HomePage() {
  const trend = useLoaderData();

  return (
    <div className="size-full flex flex-col gap-32">
      <HeroComponent data={trend?.results[0]} />
      <TrendingsComponent data={trend?.results} />
    </div>
  );
}

export default HomePage;
