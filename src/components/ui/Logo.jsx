import { Link } from "react-router-dom";
import { LogoIcon } from "../../constants";

// eslint-disable-next-line react/prop-types
export default function Logo({ compact = false }) {
  return (
    <Link to={"/"} className="group flex items-center gap-2.5">
      <span className="grid size-9 place-items-center rounded-xl bg-gradient-accent text-on-accent shadow-lg shadow-accent/30 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
        <LogoIcon className="size-[18px]" strokeWidth={2.4} />
      </span>
      <span
        className={`font-display text-lg font-normal tracking-tight text-fg ${
          compact ? "hidden sm:inline" : ""
        }`}
      >
        Fua<span className="text-gradient">Watch</span>
      </span>
    </Link>
  );
}
