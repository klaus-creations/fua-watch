import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

function FavoritesPage() {
  return (
    <div className="flex w-full justify-center px-4 pt-16 md:px-8">
      <div className="flex max-w-md flex-col items-center gap-4 rounded-3xl border border-dashed border-line bg-surface/60 px-8 py-14 text-center">
        <span className="grid size-14 place-items-center rounded-2xl bg-accent/10 text-accent">
          <Heart className="size-6" />
        </span>
        <h1 className="font-display text-2xl font-light text-fg">
          No favorites yet
        </h1>
        <p className="text-sm leading-relaxed text-muted">
          Movies and shows you save will show up here.
        </p>
        <Link
          to="/"
          className="mt-2 rounded-xl bg-gradient-accent px-5 py-2.5 text-sm font-medium text-on-accent shadow-lg shadow-accent/30"
        >
          Start exploring
        </Link>
      </div>
    </div>
  );
}

export default FavoritesPage;
