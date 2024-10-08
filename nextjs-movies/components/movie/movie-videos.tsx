import { API_URL } from "../../app/constants";

export default async function MovieVideos({ id }: { id: string }) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  const videos = await response.json();

  return (
    <section className="grid grid-cols-2 gap-4 mt-8 md:grid-cols-4">
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://www.youtube.com/embed/${video.key}`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picutre-in-picture"
          allowFullScreen
          className="w-full rounded-md xl:h-60"
        />
      ))}
    </section>
  );
}
