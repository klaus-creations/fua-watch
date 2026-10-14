import {
  Clapperboard,
  Flame,
  Info,
  LayoutGrid,
  ListVideo,
  PlayCircle,
  Search,
} from "lucide-react";
import PageHeader from "../components/ui/PageHeader";

const features = [
  {
    icon: Search,
    title: "Search Movies",
    text: "Instantly find your favorite movies by title, genre, or keyword.",
  },
  {
    icon: LayoutGrid,
    title: "Browse by Categories",
    text: "Explore movies by genres like Action, Drama, Sci-Fi, and more.",
  },
  {
    icon: Flame,
    title: "Trending & Popular",
    text: "Stay up-to-date with the latest and most popular films.",
  },
  {
    icon: Clapperboard,
    title: "Detailed Movie Info",
    text: "Get insights into movie details, including ratings, release dates, and cast.",
  },
  {
    icon: PlayCircle,
    title: "Watch Trailers",
    text: "Preview trailers before deciding what to watch.",
  },
  {
    icon: ListVideo,
    title: "Personalized Experience",
    text: "Create a watchlist and keep track of your favorite movies.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pt-10 md:px-8">
      <PageHeader
        icon={Info}
        eyebrow="About us"
        title={
          <>
            Movies, shows and people,{" "}
            <span className="text-gradient">all in one place.</span>
          </>
        }
        description={
          <>
            Fua Watch is a feature-rich movie discovery platform powered by the{" "}
            <span className="font-medium text-fg">TMDB API</span>. It provides
            an extensive collection of movies, allowing users to explore,
            search, and stay updated with the latest entertainment.
          </>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, text }, i) => (
          <div
            key={title}
            style={{ animationDelay: `${i * 60}ms` }}
            className="group relative animate-fade-up overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10"
          >
            <div className="absolute -right-10 -top-10 size-32 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            <span className="mb-5 grid size-11 place-items-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-gradient-accent group-hover:text-on-accent">
              <Icon className="size-5" />
            </span>
            <h3 className="font-display text-lg font-normal text-fg">
              {title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{text}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-5 rounded-3xl border border-line bg-surface p-8 text-center sm:flex-row sm:text-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Tmdb.new.logo.svg"
          alt="TMDB Logo"
          className="w-28 shrink-0"
        />
        <p className="text-sm leading-relaxed text-muted">
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>
      </div>
    </div>
  );
}
