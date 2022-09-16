import Link from "next/link";

import Container from "@/components/Container";

export default function NotFound() {
  return (
    <Container title="404 – Mikalai Paliakou">
      <div className="flex flex-col justify-center items-center mb-16 text-center">
        <h1 className="font-bold text-3xl md:text-5xl text-zinc-900 dark:text-zinc-100">
          <span className="block mb-2 md:mb-4 text-purple-700 dark:text-purple-400">
            404
          </span>
          Page Not Found
        </h1>
        <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 my-8 max-w-xs">
          Looks like the page which you&apos;re trying to reach doesn&apos;t
          exist 😕
        </p>
        <Link href="/">
          <a className="inline-block px-6 py-3 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 font-medium">
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
