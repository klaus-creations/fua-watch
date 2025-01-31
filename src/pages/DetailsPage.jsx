import { useLoaderData } from "react-router-dom";
import { tmdbImagePath } from "../utils/imagePath";
import SmallDescription from "../components/DetailPages/SmallDescription";

export default function DetailsPage() {
  const { detailData } = useLoaderData();

  return (
    <div className="w-full px-4 lg:px-6 ">
      {!detailData ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-col items-center lg:flex-row lg:justify-between w-full">
          <div className="w-full lg:w-[45%] bg-indigo-950">
            <SmallDescription
              poster={detailData.poster_path}
              title={detailData.original_name}
              desc={detailData.overview}
            />
          </div>
          <div className="w-full lg:w-[45%] bg-yellow-400">
            <img
              src={tmdbImagePath(detailData.backdrop_path)}
              alt="detail page backdrop image"
              className="w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
