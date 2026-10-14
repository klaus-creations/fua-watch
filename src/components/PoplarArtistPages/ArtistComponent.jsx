/* eslint-disable react/prop-types */
import { tmdbImagePath } from "../../utils/imagePath";
import SmartImage from "../ui/SmartImage";

export default function ArtistComponent({ data }) {
  const photo = tmdbImagePath(data.profile_path, "w500");
  const knownFor = data.known_for
    ?.map((el) => el.title || el.name)
    .filter(Boolean)
    .slice(0, 2)
    .join(", ");
  const initials = data.name
    ?.split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="group flex flex-col gap-3">
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-elevated ring-1 ring-line transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:ring-accent/40">
        <SmartImage
          src={photo}
          alt={data.name}
          label={initials}
          variant="person"
          className="size-full"
          imgClassName="grayscale-[35%] transition-all duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-3 rounded-lg bg-white/15 px-2 py-1 text-[11px] font-medium uppercase tracking-wider text-white backdrop-blur-md">
          {data.known_for_department}
        </span>
      </div>

      <div className="flex flex-col gap-0.5 px-0.5">
        <h3 className="line-clamp-1 text-sm font-medium text-fg transition-colors group-hover:text-accent">
          {data.name || data.original_name}
        </h3>
        {knownFor && (
          <p className="line-clamp-1 text-xs text-muted">{knownFor}</p>
        )}
      </div>
    </div>
  );
}
