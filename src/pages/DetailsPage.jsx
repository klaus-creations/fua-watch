import { useLoaderData } from "react-router-dom";
import SmallDescription from "../components/DetailPages/SmallDescription";
import RecommendationComponent from "../components/DetailPages/RecommendatinoMoviesComponent";
import ReviewsComponent from "../components/DetailPages/ReviewsComponent";
import LoadingSpinner from "../components/CommonPages/LoadingSpinner";

export default function DetailsPage() {
  const { detailData, recommendation, reviews } = useLoaderData();

  if (!detailData)
    return (
      <div className="grid min-h-[60vh] place-items-center">
        <LoadingSpinner value="Loading" />
      </div>
    );

  return (
    <div className="flex w-full flex-col gap-16 md:gap-20">
      <SmallDescription data={detailData} />
      <RecommendationComponent data={recommendation?.results} />
      <ReviewsComponent data={reviews?.results} />
    </div>
  );
}
