import apiClient from "@/libs/apiClient";
import MovieList from "@/components/movie-list";
import { MoviesResponse } from "@/types/movie";
import Paginator from "@/components/paginator";

export default async function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const moviesResponse: MoviesResponse = await apiClient.getPopularMovies(
    searchParams?.page ? parseInt(String(searchParams.page)) : 1
  );

  return (
    <div className="flex flex-col justify-between items-center h-screen w-screen p-10">
      <h1 className="text-2xl font-bold mb-4 p-12 text-center">
        Popular Movies
      </h1>
      <MovieList movies={moviesResponse.results} />
      <Paginator pagination={{ ...moviesResponse }} />
    </div>
  );
}
