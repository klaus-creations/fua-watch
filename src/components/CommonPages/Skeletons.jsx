/* eslint-disable react/prop-types */
// NOTE: SKELETON SCREENS THAT MIRROR THE REAL LAYOUTS WHILE DATA LOADS

const Bar = function ({ className = "" }) {
  return <div className={`skeleton rounded-full ${className}`} />;
};

const CardSkeleton = function ({ ratio = "aspect-[2/3]" }) {
  return (
    <div className="flex flex-col gap-3">
      <div className={`skeleton w-full rounded-2xl ${ratio}`} />
      <Bar className="h-3 w-3/4" />
      <Bar className="h-2.5 w-1/3" />
    </div>
  );
};

export const RowSkeleton = function () {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2.5 px-4 md:px-8">
        <Bar className="h-2.5 w-24" />
        <Bar className="h-6 w-56" />
      </div>
      <div className="flex gap-4 overflow-hidden px-4 pt-2 md:gap-5 md:px-8">
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i} className="w-36 shrink-0 sm:w-44 lg:w-48 2xl:w-52">
            <CardSkeleton />
          </div>
        ))}
      </div>
    </div>
  );
};

export const HomeSkeleton = function () {
  return (
    <div className="flex w-full flex-col gap-14 md:gap-20">
      <div className="px-4 pt-6 md:px-8">
        <div className="skeleton relative flex min-h-[520px] items-end overflow-hidden rounded-3xl p-6 md:min-h-[560px] md:p-10 lg:min-h-[600px] lg:p-14">
          <div className="flex w-full max-w-2xl flex-col gap-5">
            <Bar className="h-7 w-44 bg-surface/40" />
            <Bar className="h-14 w-4/5 bg-surface/40" />
            <Bar className="h-4 w-1/2 bg-surface/40" />
            <div className="flex flex-col gap-2">
              <Bar className="h-3 w-full bg-surface/40" />
              <Bar className="h-3 w-11/12 bg-surface/40" />
              <Bar className="h-3 w-2/3 bg-surface/40" />
            </div>
            <div className="h-11 w-36 rounded-xl bg-surface/40" />
          </div>
        </div>
      </div>
      <RowSkeleton />
      <RowSkeleton />
    </div>
  );
};

export const GridSkeleton = function ({ ratio }) {
  return (
    <div className="flex w-full flex-col gap-10 px-4 pt-10 md:px-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="skeleton size-11 rounded-2xl" />
          <Bar className="h-2.5 w-20" />
        </div>
        <Bar className="h-10 w-72" />
        <Bar className="h-3.5 w-full max-w-xl" />
      </div>
      <div className="grid w-full grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 md:gap-x-5 xl:grid-cols-5 2xl:grid-cols-6">
        {Array.from({ length: 12 }, (_, i) => (
          <CardSkeleton key={i} ratio={ratio} />
        ))}
      </div>
    </div>
  );
};

export const DetailsSkeleton = function () {
  return (
    <div className="flex w-full flex-col gap-16 md:gap-20">
      <div className="flex flex-col gap-8 px-4 pt-12 md:flex-row md:items-end md:gap-12 md:px-8 md:pt-40">
        <div className="skeleton aspect-[2/3] w-48 shrink-0 self-center rounded-2xl md:w-64 md:self-auto lg:w-72" />
        <div className="flex flex-1 flex-col gap-5">
          <Bar className="h-12 w-3/4" />
          <Bar className="h-4 w-1/3" />
          <div className="flex gap-2">
            {Array.from({ length: 3 }, (_, i) => (
              <div key={i} className="skeleton h-8 w-20 rounded-lg" />
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <Bar className="h-3 w-full max-w-3xl" />
            <Bar className="h-3 w-11/12 max-w-3xl" />
            <Bar className="h-3 w-2/3 max-w-3xl" />
          </div>
        </div>
      </div>
      <RowSkeleton />
    </div>
  );
};

export const RouteSkeleton = function ({ pathname = "/" }) {
  if (pathname === "/") return <HomeSkeleton />;
  if (pathname.startsWith("/details")) return <DetailsSkeleton />;
  if (pathname.startsWith("/popular-artists"))
    return <GridSkeleton ratio="aspect-[3/4]" />;
  return <GridSkeleton />;
};
