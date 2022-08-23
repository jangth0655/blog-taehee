import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import projects from "../../projectsData/data";
import { motion } from "framer-motion";

const SeeProjects: React.FC = () => {
  const router = useRouter();
  const [title, setTitle] = useState("Finder");
  const [index, setIndex] = useState(0);

  const onProjectPage = (projectId: string) => {
    router.push(`/posts/myProjects/${projectId}`);
  };

  useEffect(() => {
    try {
      const interval = setInterval(() => {
        setIndex((index + 1) % projects.length);
      }, 5000);
      setTitle(projects[index].title);
      return () => clearInterval(interval);
    } catch (error: any) {
      if (error.name === "AbortError") return;
      console.log(error);
    }
  }, [index]);

  return (
    <div className="min-h-screen relative px-2 pb-5">
      <div className="mt-24 mb-14 text-center space-y-2">
        <h1 className="font-bold text-4xl">My Projects</h1>
        <h5 className="text-gray-300">개인 프로젝트</h5>
      </div>
      <div className="max-w-xl h-[38rem] m-auto ">
        {projects.map((project) =>
          title === project.title ? (
            <div
              onClick={() => onProjectPage(project.id)}
              className="h-[70%] rounded-md cursor-pointer px-2 "
              key={project.img[0].height}
            >
              <div className="relative w-full h-full rounded-md ">
                <Image
                  className="rounded-md"
                  src={project.img[0].src}
                  layout="fill"
                  objectFit="cover"
                  blurDataURL={project.img[0].src}
                  placeholder="blur"
                  priority
                  alt=""
                />
              </div>

              <div className="px-4 mt-12 flex flex-col text-gray-200 space-y-2">
                <div>
                  <span className="mr-2">✅</span>
                  <span className="text-2xl font-bold">{project.title}</span>
                </div>
                <div>
                  <span className="mr-2">✅</span>
                  <span>{project.description}</span>
                </div>
                <div className="space-x-2 flex">
                  <span>✅</span>
                  <span className="text-gray-400 text-sm flex items-center w-full">
                    {project.skills.join(", ")}
                  </span>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
      {
        <div className="mt-16 w-full max-w-3xl h-4 flex justify-around m-auto">
          {projects.map((item, i) => (
            <div key={item.title} className="relative">
              <div
                onClick={() => setTitle(item.title)}
                className="inline-block bg-gray-600 h-full w-10 rounded-full hover:bg-gray-300 transition-all cursor-pointer"
              ></div>
              {title === item.title && (
                <motion.div
                  layoutId="titleCircle"
                  className="absolute w-1 h-1 bg-orange-200 -top-2 left-0 right-0 m-auto rounded-full"
                />
              )}
            </div>
          ))}
        </div>
      }
    </div>
  );
};
export default SeeProjects;
