/* eslint-disable react/prop-types */
export default function PageHeader({
  icon: Icon,
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        {Icon && (
          <span className="grid size-11 place-items-center rounded-2xl bg-gradient-accent text-on-accent shadow-lg shadow-accent/30">
            <Icon className="size-5" />
          </span>
        )}
        {eyebrow && (
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {eyebrow}
          </span>
        )}
      </div>
      <h1 className="font-display text-4xl font-extralight tracking-tight text-fg md:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
