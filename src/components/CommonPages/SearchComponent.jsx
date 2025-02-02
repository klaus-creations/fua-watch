/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import Input from "../ui/Input";
import { useState } from "react";
import { useEffect } from "react";
import { getSearchvalues } from "../../services/apiRequests";
import { tmdbImagePath } from "../../utils/imagePath";

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
      <div className="w-[90%] md:w-[80%] lg:w-[70%] 2xl:w-[50%] max-h-[70%]">
        <Input />
        <div className="w-full h-auto flex flex-col items-center gap-4 overflow-y-auto">
          {movie?.results?.map((el) => {
            return <SearchResult key={el.id} data={el} />;
          })}
        </div>
      </div>
    </div>
  );
}

const SearchResult = function ({ data }) {
  return (
    <div className="w-full flex gap-6 shrink-0">
      <img
        src={tmdbImagePath(data.poster_path)}
        alt={data.title}
        className="w-32 rounded-xl"
      />
      <h3>{data?.original_name || data?.title || data?.original_title}</h3>
    </div>
  );
};
