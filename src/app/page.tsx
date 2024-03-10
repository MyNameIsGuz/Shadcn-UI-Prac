import Image from "next/image"
import Link from "next/link"
import { Flex } from '@radix-ui/themes';
import { MainNav } from "@/components/main-nav";

export default function Home() {
  return (
    <div>
      <MainNav />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Flex direction="column" justify="center" align="center" className="text-center gap-6 rounded-lg mx-2 px-6 py-10 md:mx-10 md:px-20">
          <h1 className="text-6xl font-bold text-center">
            Write, plan, share.
            <br />
            With AI at your side.
          </h1>
          <p className="text-lg text-center font-bold text-gray-800">
            Uninotes is the connected workspace where better, faster work happens.
          </p>
          <Link href="/login">
            <p className="px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-900 rounded-md">Get Uninote free</p>
          </Link>
        </Flex>

        {/* Hero Images */}
        <Flex justify="center" align="center" className="p-2 md:w-full md:px-28">
          <Image
            className="hidden md:block"
            src="/home-hero.png"
            alt="Screenshots of the dashboard project showing desktop version"
            width={640}
            height={360}
            priority
          />
        </Flex>

        {/* Features */}
        <div>
          <div className="mb-32 grid gap-6 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors bg-gray-100 hover:border-gray-300 hover:bg-white hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Docs{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Find in-depth information about Next.js features and API.
              </p>
            </a>

            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors bg-gray-100 hover:border-gray-300 hover:bg-white hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Learn{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Learn about Next.js in an interactive course with&nbsp;quizzes!
              </p>
            </a>

            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors bg-gray-100 hover:border-gray-300 hover:bg-white hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Templates{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Explore starter templates for Next.js.
              </p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors bg-gray-100 hover:border-gray-300 hover:bg-white hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Deploy{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
                Instantly deploy your Next.js site to a shareable URL with Vercel.
              </p>
            </a>
          </div>

          <Flex justify="center" align="center" className="py-4 md:w-full ">
            <Image
              className="hidden md:block border-gray-200 border-2 rounded-xl shadow-lg"
              src="/hero.png"
              alt="Screenshots of the dashboard project showing desktop version"
              width={1440}
              height={1000}
              layout="responsive"
              priority
            />
          </Flex>
        </div>
      </main>
    </div>
  );
}
