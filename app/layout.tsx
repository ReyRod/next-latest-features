import Image from "next/image";


export default function Layout({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    <div className="flex flex-col justify-between items-center h-screen w-screen p-10">
      {children}
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