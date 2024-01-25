import { Suspense } from "react";
import MovieListFull from "@/components/movie-list-full";
import UpcomingMovies from "@/components/upcoming-movies";
import MovieListSkeleton from "@/components/movie-list-skeleton";

export default async function Page() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        <div className="flex flex-col md:flex-row justify-between items-center w-screen h-screen p-10 gap-10">
          <div className="flex flex-col w-full md:w-1/2 h-full">
            <Suspense fallback={<MovieListSkeleton />}>
              <MovieListFull />
            </Suspense>
          </div>
          <div className="flex flex-col w-full md:w-1/2 h-full">
            <Suspense fallback={<MovieListSkeleton />}>
              <UpcomingMovies />
            </Suspense>
          </div>
        </div>
      );
    }, 1000);
  });
}
