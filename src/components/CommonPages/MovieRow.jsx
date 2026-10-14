/* eslint-disable react/prop-types */
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Movie from "./Movie";
import SectionHeader from "../ui/SectionHeader";

export default function MovieRow({ eyebrow, title, data, children }) {
  const rowRef = useRef(null);

  const scroll = function (direction) {
    const row = rowRef.current;
    if (!row) return;
    row.scrollBy({
      left: direction * row.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <section className="flex w-full flex-col gap-5">
      <div className="px-4 md:px-8">
        <SectionHeader eyebrow={eyebrow} title={title}>
          {children}
          <div className="hidden gap-2 sm:flex">
            <RowButton onClick={() => scroll(-1)} label="Scroll left">
              <ChevronLeft className="size-5" />
            </RowButton>
            <RowButton onClick={() => scroll(1)} label="Scroll right">
              <ChevronRight className="size-5" />
            </RowButton>
          </div>
        </SectionHeader>
      </div>

      <div
        ref={rowRef}
        className="no-scrollbar flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-4 pt-2 md:scroll-px-8 md:gap-5 md:px-8"
      >
        {data?.map((el) => {
          return (
            <div
              key={el.id}
              className="w-36 shrink-0 snap-start sm:w-44 lg:w-48 2xl:w-52"
            >
              <Movie data={el} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

const RowButton = function ({ onClick, label, children }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="grid size-9 cursor-pointer place-items-center rounded-full border border-line bg-surface text-fg transition-all hover:border-accent/40 hover:text-accent active:scale-95"
    >
      {children}
    </button>
  );
};
