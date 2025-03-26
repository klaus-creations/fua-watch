import { useLoaderData } from "react-router-dom";
import SmallDescription from "../components/DetailPages/SmallDescription";
import RecommendationComponent from "../components/DetailPages/RecommendatinoMoviesComponent";
import ReviewsComponent from "../components/DetailPages/ReviewsComponent";

export default function DetailsPage() {
  const { detailData, recommendation, reviews } = useLoaderData();
  console.log(detailData);

  return (
    <div className="w-full px-4 lg:px-6 flex flex-col gap-5">
      {!detailData ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="flex flex-col lg:flex-row lg:justify-between w-full">
            <div className="w-full bg-indigo-950/[.8] flex-shrink">
              <SmallDescription
                poster={detailData.poster_path}
                title={detailData.original_name || detailData.title}
                desc={detailData.overview}
                vote={detailData.vote_average}
                imdb={detailData?.imdb_id}
                genres={detailData.genres}
              />
            </div>
          </div>

          <div className="w-full  flex flex-col lg:flex-row justify-between items-start">
            <RecommendationComponent data={recommendation?.results} />
            <ReviewsComponent data={reviews?.results} />
          </div>
        </>
      )}
    </div>
  );
}
