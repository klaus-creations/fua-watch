import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to={"/"}
      className="h-[10%] font-logo bg-indigo-950/[.05] text-sky-700 flex items-center justify-center gap-1 sm:gap-2 md:gap-3"
    >
      <img src="/logo.png" className="text-white w-6" />
      <span className="text-base md:text-xl lg:text-2xl uppercase font-extrabold tracking-[2px]">
        FUA WATCH
      </span>
    </Link>
  );
}
