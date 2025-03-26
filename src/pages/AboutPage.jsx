export default function AboutPage() {
  return (
    <section className="text-gray-800 dark:text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-blue-400">
          About LanaFilms
        </h2>
        <p className="text-lg ">
          LanaFilms is a feature-rich movie discovery platform powered by the{" "}
          <span className="text-blue-400 font-semibold">TMDB API</span>. It
          provides an extensive collection of movies, allowing users to explore,
          search, and stay updated with the latest entertainment.
        </p>

        <div className="mt-8 text-left max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-blue-400">
            Key Features:
          </h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✔</span>
              <span>
                <strong>Search Movies:</strong> Instantly find your favorite
                movies by title, genre, or keyword.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✔</span>
              <span>
                <strong>Browse by Categories:</strong> Explore movies by genres
                like Action, Drama, Sci-Fi, and more.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✔</span>
              <span>
                <strong>Trending & Popular Movies:</strong> Stay up-to-date with
                the latest and most popular films.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✔</span>
              <span>
                <strong>Detailed Movie Info:</strong> Get insights into movie
                details, including ratings, release dates, and cast.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✔</span>
              <span>
                <strong>Watch Trailers:</strong> Preview trailers before
                deciding what to watch.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✔</span>
              <span>
                <strong>Personalized Experience:</strong> Create a watchlist and
                keep track of your favorite movies.
              </span>
            </li>
          </ul>
        </div>

        <p className="mt-8 text-sm">
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>

        <div className="mt-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Tmdb.new.logo.svg"
            alt="TMDB Logo"
            className="w-32 mx-auto opacity-75"
          />
        </div>
      </div>
    </section>
  );
}
