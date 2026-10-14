/* eslint-disable react/prop-types */
import Movie from "./Movie";

export default function MovieGrid({ data }) {
  return (
    <div className="grid w-full grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 md:gap-x-5 xl:grid-cols-5 2xl:grid-cols-6">
      {data?.map((el) => {
        return <Movie key={el.id} data={el} />;
      })}
    </div>
  );
}
