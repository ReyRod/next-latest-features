import MovieCard from "@/components/movie-card";
import { Movie } from "@/types/movie";

export default function MovieList({ movies }: { movies: Movie[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {movies.map((movie, index) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          priority={index <= 3 ? true : false}
        />
      ))}
    </div>
  );
}
