import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "@/app/layout";

export default function Page() {
  const { query } = useRouter();
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
      </Head>
      <h1 className="text-2xl font-bold mb-4 p-12">Page Router</h1>
      <span>{query.slug}</span>
    </Layout>
  );
}
