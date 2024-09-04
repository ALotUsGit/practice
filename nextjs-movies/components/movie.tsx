import Link from "next/link";

type TMovieProps = {
  id: string;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
};

export default function Movie({
  id,
  title,
  poster_path,
  release_date,
  vote_average,
}: TMovieProps) {
  return (
    <li key={id}>
      {/* prefetch - client가 누를 것을 대비해 데이터를 미리 다운받아 둔다. */}
      <Link prefetch href={`/${id}`}>
        <div className="overflow-hidden rounded-md">
          <img
            src={poster_path}
            alt={title}
            className="transition scale-105 hover:opacity-80 hover:scale-100"
          />
        </div>
        <h2 className="mt-2 font-bold">{title}</h2>
        <div className="flex justify-between mt-2 text-sm">
          <p className="text-gray-400">{release_date.substring(0, 4)}</p>
          <p className="text-yellow-400">★ {vote_average.toFixed(1)}</p>
        </div>
      </Link>
    </li>
  );
}
