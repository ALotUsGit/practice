import Movie from "../../components/movie/movie";
import { API_URL } from "../constants";

export const metadata = {
  title: "HOME",
};

const getMovies = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
};

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <ul className="grid grid-cols-3 gap-y-8 gap-x-4 md:grid-cols-4 xl:grid-cols-6">
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
          vote_average={movie.vote_average}
        />
      ))}
    </ul>
  );
}
