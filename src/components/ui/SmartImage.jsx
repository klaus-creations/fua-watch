/* eslint-disable react/prop-types */
import { useState } from "react";
import { Clapperboard, UserRound } from "lucide-react";

// NOTE: SHIMMERS WHILE LOADING, FADES IN, AND FALLS BACK TO A PLACEHOLDER WHEN
// THE IMAGE IS MISSING OR FAILS. THE PARENT CONTROLS SIZE AND SHAPE.
export default function SmartImage({
  src,
  alt = "",
  label,
  variant = "poster",
  className = "",
  imgClassName = "",
  loading = "lazy",
}) {
  const [status, setStatus] = useState(src ? "loading" : "error");
  const [prevSrc, setPrevSrc] = useState(src);

  // Reset when the image source changes (e.g. navigating between details pages)
  if (src !== prevSrc) {
    setPrevSrc(src);
    setStatus(src ? "loading" : "error");
  }

  return (
    <div
      className={`overflow-hidden ${
        /\b(absolute|fixed)\b/.test(className) ? "" : "relative"
      } ${className}`}
    >
      {status === "loading" && <div className="skeleton absolute inset-0" />}

      {status === "error" ? (
        <Placeholder alt={alt} label={label} variant={variant} />
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
          className={`size-full object-cover transition-opacity duration-700 ${
            status === "loaded" ? "opacity-100" : "opacity-0"
          } ${imgClassName}`}
        />
      )}
    </div>
  );
}

const Placeholder = function ({ alt, label, variant }) {
  const Icon = variant === "person" ? UserRound : Clapperboard;
  const text = label ?? alt;

  if (variant === "backdrop")
    return (
      <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_80%_20%,var(--glow),transparent),linear-gradient(135deg,var(--elevated),var(--surface))]" />
    );

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[radial-gradient(90%_70%_at_50%_0%,var(--glow),transparent),linear-gradient(160deg,var(--elevated),var(--surface))] p-4 text-center">
      <span className="grid size-12 place-items-center rounded-2xl border border-line bg-surface/60 text-subtle backdrop-blur">
        <Icon className="size-5" strokeWidth={1.5} />
      </span>
      {text && (
        <span className="line-clamp-3 font-display text-sm font-light leading-snug text-muted">
          {text}
        </span>
      )}
    </div>
  );
};
