'use client'
import { HoverEffect } from "./ui/card-hover-effect";

export function ProjectCards() {
  return (
    <div id="projects" className="mx-auto px-8 md:mt-[10vh]">
      <div className="lg:h-[35rem] h-[80rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className=" font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-blue-600 py-8">
      <h2 className="ml-16 md:ml-[40vw] text-4xl">Projects</h2>
      <HoverEffect items={projects} />
      </div>
    </div>
     
    </div>
  );
}
export const projects = [
  {
    title: "Blogs",
    description:
      "  Next js 14  , Tailwind CSS , MongoDB , Next Auth ",
    link:"https://dipak-khade-blogs.vercel.app/",
  },
  
  {
    title: "e commerce website",
    description:
      "Next js 14 , JavaScript , Tailwind CSS , MongoDB , Next Auth",
    link: "https://github.com/DipakKhade/ClothInference/tree/main/clothinference",
  },
  
  {
    title: "detecting bleeding in brain",
    description:
      " HTML , CSS , JavaScript , Flask , Python , R",
    link: "https://github.com/DipakKhade/MSc-Project",
  },
  {
    title: "file share webapp",
    description:
      " Express , Node js , MongoDB , Multer , ejs",
    link: "https://meta.com",
  },
  
  {
    title: "app to store a code snippets",
    description:
      " React , TypeScript , Tailwind CSS ",
    link: "https://dipakcodesnippets.vercel.app/",
  },
];
