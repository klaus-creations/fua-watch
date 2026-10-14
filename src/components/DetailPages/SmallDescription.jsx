/* eslint-disable react/prop-types */
import { Calendar, Clock, ExternalLink, Star, Tv } from "lucide-react";
import { releaseYear, tmdbImagePath } from "../../utils/imagePath";
import SmartImage from "../ui/SmartImage";

export default function SmallDescription({ data }) {
  const title = data.title || data.name || data.original_title;
  const poster = tmdbImagePath(data.poster_path, "w500");
  const backdrop = tmdbImagePath(data.backdrop_path);
  const year = releaseYear(data);
  const runtime = data.runtime
    ? `${Math.floor(data.runtime / 60)}h ${data.runtime % 60}m`
    : data.number_of_seasons
      ? `${data.number_of_seasons} season${data.number_of_seasons > 1 ? "s" : ""}`
      : null;

  return (
    <section className="relative isolate">
      {/* BACKDROP */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] overflow-hidden md:h-[520px]">
        <SmartImage
          src={backdrop}
          variant="backdrop"
          loading="eager"
          className="size-full opacity-60 dark:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/80 via-transparent to-transparent" />
      </div>

      <div className="flex flex-col gap-8 px-4 pt-12 md:flex-row md:items-end md:gap-12 md:px-8 md:pt-40">
        <div className="w-48 shrink-0 animate-pop-in self-center md:w-64 md:self-auto lg:w-72">
          <SmartImage
            src={poster}
            alt={title}
            loading="eager"
            className="aspect-[2/3] w-full rounded-2xl shadow-2xl shadow-black/40 ring-1 ring-line"
          />
        </div>

        <div className="flex min-w-0 flex-1 animate-fade-up flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="font-display text-4xl font-extralight leading-tight tracking-tight text-fg md:text-5xl lg:text-6xl">
              {title}
            </h1>
            {data.tagline && (
              <p className="text-lg italic text-muted">{data.tagline}</p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2 text-sm">
            {data.vote_average > 0 && (
              <Meta>
                <Star className="size-4 fill-amber-400 text-amber-400" />
                <span className="font-medium text-fg">
                  {data.vote_average.toFixed(1)}
                </span>
                {data.vote_count > 0 && (
                  <span className="text-subtle">
                    ({data.vote_count.toLocaleString()})
                  </span>
                )}
              </Meta>
            )}
            {year && (
              <Meta>
                <Calendar className="size-4" />
                {year}
              </Meta>
            )}
            {runtime && (
              <Meta>
                {data.runtime ? (
                  <Clock className="size-4" />
                ) : (
                  <Tv className="size-4" />
                )}
                {runtime}
              </Meta>
            )}
          </div>

          {data.genres?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {data.genres.map((el) => {
                return (
                  <span
                    key={el.id}
                    className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                  >
                    {el?.name}
                  </span>
                );
              })}
            </div>
          )}

          {data.overview && (
            <div className="flex flex-col gap-2">
              <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-subtle">
                Overview
              </h2>
              <p className="max-w-3xl text-base leading-relaxed text-muted">
                {data.overview}
              </p>
            </div>
          )}

          {data.imdb_id && (
            <a
              href={`https://www.imdb.com/title/${data.imdb_id}`}
              target="_blank"
              rel="noreferrer"
              className="group flex w-fit items-center gap-2 rounded-xl border border-line bg-surface px-4 py-2.5 text-sm font-medium text-fg transition-all hover:border-accent/40 hover:text-accent"
            >
              <span className="rounded bg-amber-400 px-1.5 py-0.5 text-[11px] font-medium text-black">
                IMDb
              </span>
              View on IMDb
              <ExternalLink className="size-3.5 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

const Meta = function ({ children }) {
  return (
    <span className="flex items-center gap-1.5 rounded-lg border border-line bg-surface/70 px-3 py-1.5 text-muted backdrop-blur-md">
      {children}
    </span>
  );
};
