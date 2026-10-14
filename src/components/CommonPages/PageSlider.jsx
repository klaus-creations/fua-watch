/* eslint-disable react/prop-types */
import { ChevronLeft, ChevronRight } from "lucide-react";

const MAX_PAGE = 5;

export default function PageSlider({
  onHandleLeft,
  onHandleRight,
  activeSlide,
}) {
  const pages = Array.from({ length: MAX_PAGE }, (_, i) => i + 1);

  return (
    <div className="mx-auto flex items-center gap-1 rounded-2xl border border-line bg-surface p-1.5 shadow-sm">
      <button
        onClick={onHandleLeft}
        disabled={activeSlide <= 1}
        aria-label="Previous page"
        className="grid size-9 cursor-pointer place-items-center rounded-xl text-fg transition-colors hover:bg-elevated disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
      >
        <ChevronLeft className="size-5" />
      </button>

      {pages.map((page) => (
        <span
          key={page}
          className={`grid size-9 place-items-center rounded-xl text-sm font-medium transition-all duration-300 ${
            page === activeSlide
              ? "bg-gradient-accent text-on-accent shadow-md shadow-accent/30"
              : "text-muted"
          }`}
        >
          {page}
        </span>
      ))}

      <button
        onClick={onHandleRight}
        disabled={activeSlide >= MAX_PAGE}
        aria-label="Next page"
        className="grid size-9 cursor-pointer place-items-center rounded-xl text-fg transition-colors hover:bg-elevated disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
}
