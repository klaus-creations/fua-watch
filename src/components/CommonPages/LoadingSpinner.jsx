/* eslint-disable react/prop-types */
export default function LoadingSpinner({ value }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="relative size-10">
        <span className="absolute inset-0 rounded-full border-2 border-line" />
        <span className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-accent border-r-accent-2" />
      </span>
      {value && (
        <span className="text-sm font-medium tracking-wide text-muted">
          {value}
        </span>
      )}
    </div>
  );
}
