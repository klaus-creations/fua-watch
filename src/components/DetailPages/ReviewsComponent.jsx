import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import { EmptyState } from "./RecommendatinoMoviesComponent";

/* eslint-disable react/prop-types */
export default function ReviewsComponent({ data }) {
  const reviews = data?.slice(0, 5) ?? [];
  const [activeReview, setActiveReview] = useState(0);
  const handleLeftClick = function () {
    if (activeReview > 0) {
      setActiveReview(activeReview - 1);
    } else {
      setActiveReview(reviews.length - 1);
    }
  };

  const handleRightClick = function () {
    if (activeReview < reviews.length - 1) {
      setActiveReview(activeReview + 1);
    } else {
      setActiveReview(0);
    }
  };

  return (
    <section className="flex flex-col gap-5 px-4 md:px-8">
      <SectionHeader eyebrow="What people say" title="Reviews">
        {reviews.length > 1 && (
          <>
            <NavButton onClick={handleLeftClick} label="Previous review">
              <ChevronLeft className="size-5" />
            </NavButton>
            <NavButton onClick={handleRightClick} label="Next review">
              <ChevronRight className="size-5" />
            </NavButton>
          </>
        )}
      </SectionHeader>

      {reviews.length === 0 ? (
        <EmptyState text="No reviews yet" />
      ) : (
        <>
          <div className="relative h-80 overflow-hidden rounded-3xl border border-line bg-surface">
            {reviews.map((review, i) => {
              return (
                <Review
                  key={review.id}
                  id={i}
                  activeSlide={activeReview}
                  review={review}
                />
              );
            })}
          </div>

          {reviews.length > 1 && (
            <div className="flex justify-center gap-2">
              {reviews.map((review, i) => (
                <button
                  key={review.id}
                  onClick={() => setActiveReview(i)}
                  aria-label={`Show review ${i + 1}`}
                  className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                    i === activeReview
                      ? "w-8 bg-gradient-accent"
                      : "w-1.5 bg-line hover:bg-subtle"
                  }`}
                />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}

const NavButton = function ({ onClick, label, children }) {
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

const Review = function ({ review, id, activeSlide }) {
  const slidingvalue = (id - activeSlide) * 100;
  const rating = review.author_details?.rating;
  return (
    <div
      className="absolute inset-0 flex flex-col gap-4 p-6 transition-all duration-500 ease-out md:p-8"
      style={{
        transform: `translateX(${slidingvalue}%)`,
        opacity: id === activeSlide ? 1 : 0,
      }}
    >

      <div className="flex items-center gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gradient-accent font-display text-lg font-light uppercase text-on-accent">
          {review.author?.[0]}
        </span>
        <div className="flex flex-col">
          <h3 className="font-medium text-fg">{review.author}</h3>
          <span className="text-xs text-subtle">
            {review.created_at &&
              new Date(review.created_at).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
          </span>
        </div>
        {rating != null && (
          <span className="ml-auto flex items-center gap-1 rounded-lg bg-amber-400/15 px-2 py-1 text-xs font-medium text-amber-600 dark:text-amber-400">
            <Star className="size-3 fill-current" />
            {rating}/10
          </span>
        )}
      </div>

      <p className="relative overflow-y-auto pr-2 text-sm leading-relaxed whitespace-pre-line text-muted md:text-base">
        {review.content}
      </p>
    </div>
  );
};
