import Layout from "@/app/layout";

export default function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4 p-12">App Router</h1>
      <span>{searchParams?.slug}</span>
    </Layout>
  );
}
