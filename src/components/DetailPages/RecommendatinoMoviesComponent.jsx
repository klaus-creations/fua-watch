/* eslint-disable react/prop-types */
import MovieRow from "../CommonPages/MovieRow";
import SectionHeader from "../ui/SectionHeader";

export default function RecommendationComponent({ data }) {
  if (!data?.length)
    return (
      <div className="flex flex-col gap-5 px-4 md:px-8">
        <SectionHeader eyebrow="You might like" title="Recommendations" />
        <EmptyState text="No recommendations yet" />
      </div>
    );

  return (
    <MovieRow eyebrow="You might like" title="Recommendations" data={data} />
  );
}

export const EmptyState = function ({ text }) {
  return (
    <div className="grid w-full place-items-center rounded-2xl border border-dashed border-line py-12 text-sm text-muted">
      {text}
    </div>
  );
};
