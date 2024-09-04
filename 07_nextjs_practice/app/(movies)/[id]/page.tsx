import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";
import InfoLoading from "./loading";

type TMovieDetail = {
  params: { id: string };
};

export async function generateMetadata({ params: { id } }: TMovieDetail) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function Movies({ params: { id } }: TMovieDetail) {
  // 병렬로 async 시작하게 하는 방법
  return (
    <div>
      <Suspense fallback={<InfoLoading />}>
        <MovieInfo id={id} />
      </Suspense>

      <Suspense
        fallback={
          <div className="w-2/4 h-48 mt-8 bg-gray-500 rounded md:w-1/4"></div>
        }
      >
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}