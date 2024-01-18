import apiClient from "@/libs/apiClient";
import MovieCard from "@/components/MovieCard";
import { MoviesResponse } from "@/types/movie";

export default async function MovieListFull() {
  const moviesResponse: MoviesResponse = await apiClient.getPopularMovies();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 p-4 md:p-12 text-center">
        Upcoming Movies
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        {moviesResponse.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}