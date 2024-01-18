import Image from "next/image";
import { Movie } from "@/types/movie";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md items-center">
      <div className="relative h-[500px] w-full rounded-t-lg">
        <Image
          className="flex rounded-t-lg object-cover"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          fill
          priority
          sizes="(max-width: 640px) 100%,
                 (max-width: 1024px) 50%,
                 25%"
        />
      </div>
      <h2 className="flex text-lg font-bold text-black text-center p-4 min-h-[90px] items-center">
        {movie.title}
      </h2>
    </div>
  );
}
