"use client";
import dynamic from "next/dynamic";
import { useEffect, useState, useTransition } from "react";
import { getMoviesByYear } from "@/app/server-actions-example/actions";
import { Movie, MoviesResponse } from "@/types/movie";
const MovieList = dynamic(() => import("@/components/movie-list"));

export default function Page() {
  const [isPending, startTransition] = useTransition();
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    startTransition(async () => {
      const moviesResponse: MoviesResponse = await getMoviesByYear(
        selectedYear
      );
      setMovies(moviesResponse.results);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClick = async () => {
    startTransition(async () => {
      const moviesResponse: MoviesResponse = await getMoviesByYear(
        selectedYear
      );
      setMovies(moviesResponse.results);
    });
  };

  return (
    <div className="flex flex-col items-center h-screen w-screen p-10">
      <h1 className="text-2xl font-bold p-12 text-center">Movies by Year</h1>

      <div className="flex flex-row gap-4 mb-8">
        <label htmlFor="year">Select Year: </label>
        <select
          className="rounded-lg text-black w-[100px] text-center"
          id="year"
          name="year"
          value={selectedYear}
          onChange={(e) => setSelectedYear(parseInt(e.target.value))}
        >
          <option value={currentYear}>{currentYear}</option>
          <option value={currentYear - 1}>{currentYear - 1}</option>
          <option value={currentYear - 2}>{currentYear - 2}</option>
          <option value={currentYear - 3}>{currentYear - 3}</option>
          <option value={currentYear - 4}>{currentYear - 4}</option>
        </select>
        <button
          className="rounded-lg bg-white disabled:bg-slate-400 w-[100px] text-center text-black"
          type="button"
          onClick={onClick}
          disabled={isPending}
        >
          Search
        </button>
      </div>

      {!isPending && <MovieList movies={movies} />}
    </div>
  );
}
