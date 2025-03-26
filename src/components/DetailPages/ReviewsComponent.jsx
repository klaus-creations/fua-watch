import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

/* eslint-disable react/prop-types */
export default function ReviewsComponent({ data }) {
  const reviews = data.slice(0, 5);
  const [activeReview, setActiveReview] = useState(0);
  const handleLeftClick = function () {
    if (activeReview > 0) {
      setActiveReview(activeReview - 1);
    } else {
      setActiveReview(4);
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
    <div className="w-full lg:w-[48%] relative overflow-hidden h-96 ">
      {!reviews ? (
        <div className="size-full flex items-center justify-center ">
          <span className="text-base lg:text-xl text-gray-800 dark:text-gray-200">
            No Reviews
          </span>
        </div>
      ) : (
        <>
          <h2 className="text-xl font-bold text-gray-700">Reviews</h2>
          <button
            onClick={handleLeftClick}
            className="p-4 text-xl lg:text-2xl absolute top-[50%] -translate-y-[50%] left-2 z-10"
          >
            <ChevronLeft className="size-8 lg:size-10 text-white bg-sky-700/[.3] cursor-pointer rounded-xl" />
          </button>

          <button
            onClick={handleRightClick}
            className="p-4 text-xl lg:text-2xl absolute top-[50%] -translate-y-[50%] right-2 z-10"
          >
            <ChevronRight className="size-8 lg:size-10 text-white bg-sky-700/[.3] cursor-pointer rounded-xl" />
          </button>

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
        </>
      )}
    </div>
  );
}

const Review = function ({ review, id, activeSlide }) {
  const slidingvalue = (id - activeSlide) * 100;
  return (
    <div
      className="duration-300 transition-all bg-indigo-950/[.3] w-full h-[90%] absolute left-o bottom-0 py-3 px-4 lg:px-14"
      style={{
        left: `${slidingvalue}%`,
      }}
    >
      <h3 className="text-gray-950 dark:text-gray-100 text-base lg:text-xl tracking-[1px] font-bold h-[10%]">
        {review.author}
      </h3>

      <p className="text-gray-700 dark:text-gray-300 text-sm lg:text-base h-[85%] overflow-auto">
        {review.content}
      </p>
    </div>
  );
};
