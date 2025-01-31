/* eslint-disable react/prop-types */
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PageSlider({
  onHandleLeft,
  onHandleRight,
  activeSlide,
}) {
  return (
    <div className="w-full sm:w-[85%] md:w-[75%] lg:w-[70%] 2xl:w-[60%] mx-auto justify-between flex">
      <button
        onClick={onHandleLeft}
        className="p-2 rounded-full border-[1px] border-sky-700/[.8] cursor-pointer text-white bg-black/[.3] shadow-md shdaow-sky-700 hover:scale-[1.02]"
      >
        <ChevronLeft className="size-6 md:size-8" />
      </button>
      <div className="flex items-center gap-2">
        <span className="text-xs lg:text-base text-gray-300 bg-black/[.4] border-[1px] border-sky-700/[.7] p-2 rounded-lg">
          {activeSlide > 1 ? activeSlide - 1 : 0}
        </span>

        <span className="text-base lg:text-xl text-gray-300 bg-black/[.4] border-[1px] shadow-md shadow-sky-700  border-sky-700/[.7] p-2 rounded-lg">
          {activeSlide}
        </span>

        <span className="text-xs lg:text-base text-gray-300 bg-black/[.4] border-[1px] border-sky-700/[.7] p-2 rounded-lg">
          {activeSlide < 5 ? activeSlide + 1 : 0}
        </span>
      </div>
      <button
        onClick={onHandleRight}
        className="p-2 rounded-full border-[1px] border-sky-700/[.8] cursor-pointer text-white bg-black/[.3] shadow-md shdaow-sky-700 hover:scale-[1.02]"
      >
        <ChevronRight className="size-6 md:size-8" />
      </button>
    </div>
  );
}
