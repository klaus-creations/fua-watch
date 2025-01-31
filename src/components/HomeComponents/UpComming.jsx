/* eslint-disable react/prop-types */
import Movie from "../CommonPages/Movie";

export default function Upcomings({ data }) {
  return (
    <div className="w-full  dark:bg-indigo-950 bg-indigo-900 flex flex-col gap-5 items-start px-4 lg:px-6 py-4 md:py-8">
      <div className="w-full flex items-center gap-4">
        <h2 className="text-xl font-bold lg:text-2xl tracking-[1px] text-sky-700">
          Upcoming Movies
        </h2>
      </div>

      <div className="w-full flex overflow-x-auto gap-5">
        {data?.map((el) => {
          return <Movie key={el.id} data={el} />;
        })}
      </div>
    </div>
  );
}
