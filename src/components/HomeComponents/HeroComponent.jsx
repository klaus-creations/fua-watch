import { ArrowRight, Calendar, Flame, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { mediaType, releaseYear, tmdbImagePath } from "../../utils/imagePath";
import { detailRedirect } from "../../utils/detailRedirect";
import SmartImage from "../ui/SmartImage";

/* eslint-disable react/prop-types */
function HeroComponent({ data }) {
  if (!data) return null;

  const title = data.title || data.name || data.original_title;

  return (
    <section className="px-4 pt-6 md:px-8">
      <div className="relative isolate min-h-[440px] overflow-hidden rounded-3xl bg-black ring-1 ring-line md:min-h-[460px] lg:min-h-[480px]">
        <SmartImage
          src={tmdbImagePath(data.backdrop_path)}
          variant="backdrop"
          loading="eager"
          className="absolute inset-0 -z-10 size-full"
          imgClassName="scale-105"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div className="flex h-full min-h-[inherit] items-end gap-10 p-6 md:p-10 lg:p-14">
          <HeroCenter data={data} title={title} />

          <div className="ml-auto hidden w-40 shrink-0 self-center rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-105 xl:block 2xl:w-44">
            <SmartImage
              src={tmdbImagePath(data.poster_path, "w500")}
              alt={title}
              loading="eager"
              className="aspect-[2/3] w-full rounded-xl shadow-sm shadow-black/20 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const HeroCenter = function ({ data, title }) {
  const navigate = useNavigate();
  return (
    <div className="flex max-w-2xl animate-fade-up flex-col items-start gap-5 text-white">
      <span className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] backdrop-blur-md">
        <Flame className="size-3.5 text-accent-2" />
        #1 Trending today
      </span>

      <h1 className="font-display text-4xl font-extralight leading-[1.05] tracking-tight [text-shadow:0_1px_12px_rgb(0_0_0/0.35)] md:text-5xl lg:text-6xl">
        {title}
      </h1>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/80">
        {data.vote_average > 0 && (
          <span className="flex items-center gap-1.5">
            <Star className="size-4 fill-amber-400 text-amber-400" />
            <span className="font-medium text-white">
              {data.vote_average.toFixed(1)}
            </span>
            <span className="text-white/50">/ 10</span>
          </span>
        )}
        {releaseYear(data) && (
          <span className="flex items-center gap-1.5">
            <Calendar className="size-4" />
            {releaseYear(data)}
          </span>
        )}
        <span className="rounded-md border border-white/20 px-2 py-0.5 text-xs font-medium uppercase">
          {mediaType(data) === "tv" ? "TV Series" : "Movie"}
        </span>
      </div>

      {data.overview && (
        <p className="line-clamp-3 max-w-xl text-sm leading-relaxed text-white/85 [text-shadow:0_1px_8px_rgb(0_0_0/0.4)] md:text-base">
          {data.overview}
        </p>
      )}

      <button
        onClick={() => detailRedirect(navigate, mediaType(data), data.id)}
        className="group mt-1 flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-accent px-5 py-3 text-sm font-medium text-on-accent shadow-lg shadow-accent/40 transition-all hover:shadow-xl hover:shadow-accent/50 active:scale-[0.98]"
      >
        View details
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
};

export default HeroComponent;
