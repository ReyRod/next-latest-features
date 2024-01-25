import MovieCardSkeleton from "@/components/movie-card-skeleton";

export default function MovieListSkeleton() {
  return (
    <div className="flex flex-col items-center">
      <hr className="flex m-4 md:m-12 rounded-full bg-slate-400 w-[240px] h-[50px]" />
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {Array(20)
          .fill(null)
          .map((_item, i) => (
            <MovieCardSkeleton key={`movie-skeleton-${i}`} />
          ))}
      </div>
    </div>
  );
}
