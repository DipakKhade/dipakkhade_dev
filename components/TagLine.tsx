"use client";
import Link from "next/link";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "I",
    },
    {
      text: "turn",
    },
    {
      text: "code",
    },
    {
      text: "into",
    },
    {
      text: "captivating web experiences.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Hello  I&apos;m Dipak Khade
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link href='https://discord.com/channels/1195005205989826691/1195005207248122008'>
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join Discord Server
        </button>
        </Link>
        <Link href='https://dipak-khade-blogs.vercel.app/'>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Blogs
        </button>
        </Link>
    
      </div>
    </div>
  );
}
