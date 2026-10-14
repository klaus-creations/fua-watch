/* eslint-disable react/prop-types */
export default function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="flex w-full items-end justify-between gap-4">
      <div className="flex flex-col gap-1">
        {eyebrow && (
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {eyebrow}
          </span>
        )}
        <h2 className="font-display text-2xl font-light tracking-tight text-fg md:text-3xl">
          {title}
        </h2>
      </div>
      {children && <div className="flex items-center gap-2">{children}</div>}
    </div>
  );
}
