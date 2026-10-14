import { Users } from "lucide-react";
import { useLoaderData } from "react-router-dom";
import ArtistComponent from "../components/PoplarArtistPages/ArtistComponent";
import PageHeader from "../components/ui/PageHeader";

export default function PopularArtistsPage() {
  const data = useLoaderData();
  return (
    <div className="flex w-full flex-col gap-10 px-4 pt-10 md:px-8">
      <PageHeader
        icon={Users}
        eyebrow="People"
        title="Popular Artists"
        description="The actors, directors and creators getting the most attention this week."
      />

      <div className="grid w-full grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 md:gap-x-5 xl:grid-cols-5 2xl:grid-cols-6">
        {data?.results.map((el) => {
          return <ArtistComponent key={el.id} data={el} />;
        })}
      </div>
    </div>
  );
}
