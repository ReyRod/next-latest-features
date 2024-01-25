import Link from "next/link";
import Layout from "@/app/layout";

const examples = [
  {
    id: "component-example/client-component",
    name: "Client Component",
  },
  {
    id: "component-example/server-component",
    name: "Server Component",
  },
];

export default function Page() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4 p-12">Types of Components</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
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
    </Layout>
  );
}
