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
    title: "exchange",
    description:
      "  Nextjs , tailwindcss , Docker , Express , Redis PubSub , Redis Queue , WebSocket , postgres timescele db  ",
    link:"https://github.com/DipakKhade/exchange",
  },
  {
    title: "Blogs",
    description:
      "  Next js 14  , NextAuth , tailwindcss , Docker , Recoil , Prisma , Postgresql ,  JsonWebTokens , axios , bcrypt , Contentful , shadcn ui  ",
    link:"https://drk-sigma.vercel.app/",
  },
  {
    title: "Blogs",
    description:
      "  Next js 14  , NextAuth , tailwindcss , Docker , Recoil , Prisma , Postgresql ,  JsonWebTokens , axios , bcrypt , Contentful , shadcn ui  ",
    link:"https://drk-sigma.vercel.app/",
  },
  
  {
    title: "Resume Builder",
    description:
      "Turborepo , React , Express , tailwindcss , pdfkit ,authentication using cookies",
    link: "https://github.com/DipakKhade/resume-builder",
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
    link: "https://github.com/DipakKhade/File-Sharing-webapp",
  },
  
  
];
