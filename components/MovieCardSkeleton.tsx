export default function MovieCardSkeleton() {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md items-center">
      <div className="relative h-[600px] w-full rounded-t-lg">
        <div className="flex rounded-t-lg bg-slate-400 animate-pulse w-[320px] h-full" />
      </div>
      <div className="flex justify-center items-center animate-pulse text-lg font-bold text-black text-center p-4 my-auto w-full min-h-[90px]">
        <hr className="flex rounded-full bg-slate-400 w-2/3 h-[28px]" />
      </div>
    </div>
  );
}
