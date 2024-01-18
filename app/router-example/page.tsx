import Link from "next/link";
import Image from "next/image";

const examples = [
  {
    id: "router-example/page-router",
    name: "Page Router",
  },
  {
    id: "router-example/app-router",
    name: "App Router",
  },
];

export default function Page() {
  return (
    <div className="flex flex-col justify-between items-center h-screen w-screen p-10">
      <h1 className="text-2xl font-bold mb-4 p-12">Types of Routers</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {examples.map((example) => (
          <Link
            className="flex bg-white rounded-lg shadow-md p-4 items-center justify-center"
            href={{
              pathname: `/${example.id}`,
              query: { slug: "router-test" },
            }}
            key={example.id}
          >
            <h2 className="text-lg font-bold text-black text-center">
              {example.name}
            </h2>
          </Link>
        ))}
      </div>
      <Image
        className="flex self-center dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </div>
  );
}
