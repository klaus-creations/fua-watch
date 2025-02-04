/* eslint-disable react/prop-types */
export default function LoadingSpinner({ value }) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-sky-700 tracking-[1px] text-xl lg:text-2xl">
        {value}
      </span>
      <img src="/spinner.svg" className="size-4 text-white" />
    </div>
  );
}
