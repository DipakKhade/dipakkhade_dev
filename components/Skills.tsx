import { FC } from "react";
import Image from "next/image";
import htmllogo from "../images/html_logo.png"
import csslogo from "../images/css_logo.png";
import tailwindlogo from "../images/tailwind_logo.png";
import jslogo from "../images/js_logo.webp";
import tslogo from "../images/ts_logo.png";
import react from "../images/reactjs_logo.png";
import nextlogo from "../images/next_logo.png";
import nodejslogo from "../images/nodejs_logo.png";
import expressjslogo from "../images/express_logo.png";
import nextauthlogo from "../images/nextauth_logo.png";
import mongologo from "../images/mongo_logo.jpg";
import mysqllogo from "../images/mysql_logo.jpg";
import dockerlogo from "../images/docker_logo.webp";
import gitlogo from "../images/git_logo.png";
import redislogo from "../images/redis_logo.png"
import reduxlogo from '../images/redux_logo.webp'

interface KnownThingsProps {}

interface Skill {
  tag: string;
  logo: any;
}

interface Category {
  title: string;
  skills: Skill[];
}

const KnownThings: FC<KnownThingsProps> = () => {
    const categories: Category[] = [
        {
          title: "FrontEnd",
          skills: [
            { tag: "HTML", logo: htmllogo },
            { tag: "CSS", logo: csslogo },
            { tag: "Tailwind CSS", logo: tailwindlogo },
            { tag: "JavaScript", logo: jslogo },
            { tag: "TypeScript", logo: tslogo },
            { tag: "React.js", logo: react },
            { tag: "Next.js", logo: nextlogo },
            { tag: "Redux", logo: reduxlogo },
          ],
        },
        {
          title: "BackEnd",
          skills: [
            { tag: "Node.js", logo: nodejslogo },
            { tag: "Express.js", logo: expressjslogo },
            { tag: "Next Auth", logo: nextauthlogo },
            { tag: "JavaScript", logo: jslogo }, 
            { tag: "Redis", logo: redislogo },
          ],
        },
        {
          title: "DataBase",
          skills: [
            { tag: "MongoDB", logo: mongologo },
            { tag: "MySQL", logo: mysqllogo },
          ],
        },
        {
          title: "DevOps",
          skills: [
            { tag: "Docker", logo: dockerlogo },
            { tag: "Git", logo: gitlogo },
          ],
        },
      ];

  return (
    <>
    
     
      <div className="mr-6 border border-blue-300  dark:border-zinc-300 rounded-md mt-8 ml-6">
      <h2 className="text-2xl mt-8 font-bold ml-12 md:ml-[40vw]">
        What I Know
      </h2>
      <div className="flex flex-wrap md:flex-nowrap">
        {categories.map((category) => (
          <div
            key={category.title}
            className="md:w-[25vw] w-[80vw] p-4 mb-4 dark:border-black/40 dark:bg-opacity-75 rounded-lg mt-8 sm:p-8 ml-5 mr-3"
          >
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-xl font-bold leading-none">
                {category.title}
              </h5>
            </div>
            <div className="flow-root">
              <ul role="list" className="divide-y divide-blue-300 dark:divide-gray-200">
                {category.skills.map((skill) => (
                  <li key={skill.tag} className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src={skill.logo}
                          width={45}
                          height={50}
                          className="rounded-full"
                          alt="img"
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-500 truncate transition ease-in-out hover:-translate-y-1">
                          {skill.tag}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default KnownThings;
