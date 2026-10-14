/* eslint-disable react/prop-types */
import MovieRow from "../CommonPages/MovieRow";

export default function TrendingsComponent({ data }) {
  return <MovieRow eyebrow="Hot right now" title="Trending Now" data={data} />;
}
