import { Suspense } from "react";
import MovieListFull from "@/components/MovieListFull";
import UpcomingMovies from "@/components/UpcomingMovies";
import MovieListSkeleton from "@/components/MovieListSkeleton";

export default async function Page() {
  return (
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
}
