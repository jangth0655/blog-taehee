import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "../../../components/Layout";
import projects from "../../../projectsData/data";

const AboutProjects: NextPage = () => {
  const router = useRouter();
  const onProjectsDetail = (projectId: string) => {
    switch (projectId) {
      case "finder":
        router.push("https://github.com/jangth0655/finder-client");
        break;
      case "grinMarket":
        router.push("https://github.com/jangth0655/nextjs-girnmarket");
        break;
      case "removie":
        router.push("https://github.com/jangth0655/ReMovie-client");
        break;
      case "starFlix":
        router.push("https://github.com/jangth0655/react-starflix-app");
        break;
    }
  };

  return (
    <Layout head="Projects" category="projects">
      <div className="flex flex-col justify-center items-center mb-14 space-y-3">
        <h1 className="font-bold text-3xl">Projects</h1>
        <h2 className="text-zinc-300 text-sm">현재 진행중 🔥</h2>
      </div>
      <main className="pb-2">
        <div className="grid grid-cols-2 gap-20 min-h-screen">
          {projects.map((project) => (
            <div
              onClick={() => onProjectsDetail(project.id)}
              className="rounded-md shadow-black shadow-xl hover:-translate-y-2 transition-all cursor-pointer mb-20 h-72"
              key={project.id}
            >
              <div className="h-full relative">
                <Image
                  className="rounded-md"
                  src={project.img[0].src}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                  blurDataURL={project.img[0].src}
                  placeholder="blur"
                  priority
                />
              </div>
              <Link href={`/posts/myProjects/${project.id}`}>
                <div className="relative -top-10 max-h-[80px] rounded-md h-full right-0 left-0 m-auto w-[80%]">
                  <div className="w-full h-full absolute bg-zinc-900 p-4 rounded-md shadow-black shadow-lg">
                    <h1 className="flex justify-center h-full items-center font-bold text-xl">{`${project.title}`}</h1>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
};
export default AboutProjects;
