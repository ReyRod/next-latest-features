import Image from "next/image";
import { Movie } from "@/types/movie";

export default function MovieCard({
  movie,
  priority = false,
}: {
  movie: Movie;
  priority?: boolean;
}) {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md items-center">
      <div className="relative h-[600px] w-full rounded-t-lg">
        <Image
          className="flex rounded-t-lg object-cover"
          src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
          alt={movie.title}
          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 20vw"
          priority={priority}
          fill
        />
      </div>
      <h2 className="flex text-lg font-bold text-black text-center p-4 min-h-[90px] items-center">
        {movie.title}
      </h2>
    </div>
  );
}
