import MovieCredit from "../../../../components/movie/movie-credit";

type TMovieDetail = {
  params: { id: string };
};

export const metadata = {
  title: "credits",
};

export default function Credits({ params: { id } }: TMovieDetail) {
  return (
    <section>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-5">
        <MovieCredit id={id} />
      </ul>
    </section>
  );
}
