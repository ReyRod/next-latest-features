import MovieListSkeleton from "@/components/MovieListSkeleton";

export default async function Loading() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-screen h-screen p-10 gap-10">
      <div className="flex flex-col w-full md:w-1/2 h-full">
        <MovieListSkeleton />
      </div>
      <div className="flex flex-col w-full md:w-1/2 h-full">
        <MovieListSkeleton />
      </div>
    </div>
  );
}
