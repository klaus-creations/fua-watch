/* eslint-disable react/prop-types */
import Movie from "../CommonPages/Movie";

export default function RecommendationComponent({ data }) {
  return (
    <div className="w-full lg:w-[50%]  dark:bg-indigo-950 bg-indigo-900 flex flex-col gap-0 items-start px-4 lg:px-6 py-4">
      <div className="w-full flex items-center">
        <h2 className="text-xl font-bold lg:text-2xl tracking-[1px] text-sky-700">
          Recommendations
        </h2>
      </div>

      <div className="w-full flex overflow-x-auto gap-3 lg:gap-2">
        {data.map((el) => {
          return <Movie key={el.id} data={el} />;
        })}
      </div>
    </div>
  );
}
