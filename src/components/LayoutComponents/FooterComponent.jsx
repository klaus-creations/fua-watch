import { Link } from "react-router-dom";
import Logo from "../ui/Logo";
import { sidebarLinks } from "../../constants";

export default function FooterComponent() {
  return (
    <footer className="mt-auto w-full border-t border-line px-4 py-10 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="flex max-w-sm flex-col gap-3">
          <Logo />
          <p className="text-sm leading-relaxed text-muted">
            Your guide to what&apos;s trending, top rated and coming soon in
            movies and TV.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {sidebarLinks.map((el) => (
            <Link
              key={el.id}
              to={el.to}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {el.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-2 border-t border-line pt-6 text-xs text-subtle sm:flex-row sm:justify-between">
        <p>
          Copyright © {new Date().getFullYear()} Fua Watch. All rights
          reserved.
        </p>
        <p>Data provided by TMDB. Not endorsed or certified by TMDB.</p>
      </div>
    </footer>
  );
}
