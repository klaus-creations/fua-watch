import { useLoaderData } from "react-router-dom";
import { tmdbImagePath } from "../utils/imagePath";
import SmallDescription from "../components/DetailPages/SmallDescription";
import RecommendationComponent from "../components/DetailPages/RecommendatinoMoviesComponent";
import ReviewsComponent from "../components/DetailPages/ReviewsComponent";

export default function DetailsPage() {
  const { detailData, recommendation, reviews } = useLoaderData();

  return (
    <div className="w-full px-4 lg:px-6 flex flex-col gap-5">
      {!detailData ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-col lg:flex-row lg:justify-between w-full">
          <div className="w-full lg:w-[50%] bg-indigo-950 flex-shrink">
            <SmallDescription
              poster={detailData.poster_path}
              title={detailData.original_name}
              desc={detailData.overview}
            />
          </div>
          <div className="w-full lg:w-[50%] bg-yellow-400">
            <img
              src={tmdbImagePath(detailData.backdrop_path)}
              alt="detail page backdrop image"
              className="w-full"
            />
          </div>
        </div>
      )}

      <div className="w-full  flex flex-col lg:flex-row justify-between items-start">
        <RecommendationComponent data={recommendation?.results} />
        <ReviewsComponent data={reviews?.results} />
      </div>
    </div>
  );
}
