/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getSearchvalues } from "../../services/apiRequests";
import { tmdbImagePath } from "../../utils/imagePath";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { detailRedirect } from "../../utils/detailRedirect";
import { changeSearchWord } from "../../features/slices/searchSlice";

export default function SearchComponent() {
  const searchValue = useSelector((state) => state.search.word);
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function getSearch() {
      const value = await getSearchvalues(searchValue, "movie");
      console.log(value);
      setMovie(value);
    }
    getSearch();
  }, [searchValue]);
  return (
    <div className="w-full h-screen bg-slate-950/[.8] fixed inset-0 z-[500] flex items-center justify-center ">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] 2xl:w-[50%] h-[75%] overflow-hidden">
        {/* <Input /> */}
        <div className="w-full h-full dark:bg-indigo-950/[.9] bg-slate-700 flex flex-col items-center gap-4 overflow-auto py-3 md:py-5 lg:py-7  px-4 md:px-6">
          {movie?.results?.map((el) => {
            if (!el.poster_path) return;
            return <SearchResult key={el.id} data={el} />;
          })}
        </div>
      </div>
    </div>
  );
}

const SearchResult = function ({ data }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const removeSearch = function () {
    dispatch(changeSearchWord(""));
  };

  return (
    <div
      onClick={() => detailRedirect(navigate, "movie", data.id, removeSearch)}
      className="w-full flex gap-6 shrink-0 bg-sky-700/[.1] p-2 lg:p-3 rounded-xl cursor-pointer hover:bg-sky-700/[.4] duration-300"
    >
      <img
        src={tmdbImagePath(data.poster_path)}
        alt={data.title}
        className="w-24 rounded-xl"
      />
      <div className="flex flex-col items-start gap-3 md:gap-4 ">
        <h3>
          Title : {data?.original_name || data?.title || data?.original_title}
        </h3>
        <h4 className="text-sm lg:text-xs">
          Release Date: {data?.release_date}
        </h4>
        <div className="flex items-center gap-1 text-sm lg:text-xs text-gray-400">
          Average Rating :
          <Star className="text-yellow-500 size-4 md:size-6" />
          {data.vote_average}
        </div>
      </div>
    </div>
  );
};
