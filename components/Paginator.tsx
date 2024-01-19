import { Pagination } from "@/types/movie";
import Link from "next/link";

export default function Paginator({ pagination }: { pagination: Pagination }) {
  const { page, total_pages } = pagination;

  if (total_pages === 1) {
    return null; // No need to render pagination if there's only one page
  }

  return (
    <div className="mx-auto my-10 pb-10">
      {page !== 1 && (
        <Link
          className="p-4 rounded-lg bg-white text-black"
          href={{ query: { page: page - 1 } }}
        >
          Previous
        </Link>
      )}

      <span className="p-4 rounded-lg bg-white mx-2 text-black font-bold">
        {page}
      </span>

      {page !== total_pages && (
        <Link
          className="p-4 rounded-lg bg-white text-black"
          href={{ query: { page: page + 1 } }}
        >
          Next
        </Link>
      )}
    </div>
  );
}
