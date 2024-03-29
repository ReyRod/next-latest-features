import Link from "next/link";
import Image from "next/image";

const examples = [
  {
    id: "router-example",
    name: "Router",
  },
  {
    id: "component-example",
    name: "Component",
  },
  {
    id: "streaming-example",
    name: "Streaming",
  },
  {
    id: "server-actions-example",
    name: "Server Actions",
  },
];

export default function Page() {
  return (
    <div className="flex flex-col justify-between items-center h-screen w-screen p-10">
      <h1 className="text-2xl font-bold mb-4 p-12">
        Next.js New Features Examples
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {examples.map((example) => (
          <Link
            className="flex bg-white rounded-lg shadow-md p-4 items-center justify-center"
            href={`/${example.id}`}
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
