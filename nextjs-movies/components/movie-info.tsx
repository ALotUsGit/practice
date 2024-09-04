import { API_URL } from "../app/constants";

export async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <section className="flex flex-col gap-8 max-w-screen-lg mx-auto sm:flex-row">
      <img
        src={movie.backdrop_path}
        className="w-full h-60 rounded object-cover sm:w-1/4"
      />
      <div className="flex flex-col py-2">
        <h2 className="mb-4 text-xl font-bold">{movie.title}</h2>
        <div className="flex justify-between mb-2">
          <p>{movie.release_date.substring(0, 4)}</p>
          <p className="text-yellow-400">★ {movie.vote_average.toFixed(1)}</p>
        </div>
        <p className="text-justify">{movie.overview}</p>
        <a
          href={movie.homepage}
          target="_blank"
          className="mt-4 ml-auto text-gray-400 transition hover:text-gray-500 sm:mt-auto"
        >
          Go Homepage →
        </a>
      </div>
    </section>
  );
}
