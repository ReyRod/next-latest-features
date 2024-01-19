import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Page() {
  const { query } = useRouter();
  return (
    <div className="flex flex-col justify-between items-center h-screen w-screen p-10">
      <Head>
        <title>Create Next App</title>
      </Head>
      <h1 className="text-2xl font-bold mb-4 p-12">Page Router</h1>
      <span>{query.slug}</span>
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
