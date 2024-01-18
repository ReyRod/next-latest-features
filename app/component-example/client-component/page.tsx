"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import apiClient from "@/libs/apiClient";
import MovieList from "@/components/MovieList";
import { Movie, Pagination, MoviesResponse } from "@/types/movie";
import Paginator from "@/components/Paginator";

export default function Page() {
  const searchParams = useSearchParams();
  const page =
    searchParams && searchParams.has("page")
      ? parseInt(searchParams.get("page") as string)
      : 1;

  const [movies, setMovies] = useState<Movie[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    total_pages: 1,
    total_results: 1,
  });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies: MoviesResponse =
          await apiClient.getPopularMovies(page);
        setMovies(fetchedMovies.results);
        setPagination({ ...fetchedMovies });
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchMovies();
  }, [page]);

  return (
    <div className="flex flex-col justify-between items-center h-screen w-screen p-10">
      <h1 className="text-2xl font-bold mb-4 p-12 text-center">
        Popular Movies
      </h1>
      <MovieList movies={movies} />
      <Paginator pagination={pagination} />
    </div>
  );
}
