/* eslint-disable react/prop-types */
import MovieRow from "../CommonPages/MovieRow";

export default function Upcomings({ data }) {
  return <MovieRow eyebrow="Coming soon" title="Upcoming Movies" data={data} />;
}
