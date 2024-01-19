"use client";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState, useTransition } from "react";
import apiClient from "@/libs/apiClient";
import { Movie, Pagination, MoviesResponse } from "@/types/movie";

const MovieList = dynamic(() => import("@/components/MovieList"));
const Paginator = dynamic(() => import("@/components/Paginator"));

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

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchMovies = () => {
      try {
        startTransition(async () => {
          const fetchedMovies: MoviesResponse =
            await apiClient.getPopularMovies(page);
          setMovies(fetchedMovies.results);
          setPagination({ ...fetchedMovies });
        });
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchMovies();
  }, [page, startTransition]);

  return (
    <div className="flex flex-col justify-between items-center h-screen w-screen p-10">
      <h1 className="text-2xl font-bold mb-4 p-12 text-center">
        Popular Movies
      </h1>
      {!isPending && (
        <>
          <MovieList movies={movies} />
          <Paginator pagination={pagination} />
        </>
      )}
    </div>
  );
}
