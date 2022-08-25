import type { NextPage } from "next";
import Layout from "../components/Layout";
import ToolImg from "../components/home/ToolImg";
import Image from "next/image";
import headerImg from "../public/assets/headerImage/coding.jpg";
import github from "../public/assets/headerImage/github.png";
import avatar from "../public/assets/avatar/profile.png";
import Link from "next/link";
import SeeProjects from "../components/home/HomeProjects";
import { useRef } from "react";

const myToolName = [
  "javascript",
  "typescript",
  "css",
  "html",
  "react",
  "nodejs",
  "tailwind",
];

const Home: NextPage = () => {
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const showPreviewProjects = () => {
    projectsSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied to clipboard");
    } catch (error) {
      alert(`error : ${error}`);
    }
  };

  return (
    <Layout head="Taehee" back={false} isHome={true}>
      <section className="min-h-screen">
        <header className="sm:h-[44rem] h-screen m-auto text-zinc-200">
          <div className="w-full max-w-2xl m-auto h-full pt-6 pb-2 px-2 sm:px-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-around mb-6">
              <div className="space-y-2 flex items-center">
                <div className="w-2 h-14 bg-zinc-600 mr-4" />
                <div>
                  <h1 className="text-2xl font-bold"> Jang Tae Hee</h1>
                  <h5 className="text-lg">✨ Junior FrontEnd Developer</h5>
                </div>
              </div>
              <div className="mt-4 sm:mt-0 relative w-full sm:w-48 h-48  rounded-2xl border-2 border-zinc-700">
                <Image src={avatar} layout="fill" objectFit="contain" alt="" />
              </div>
            </div>
            <div className="space-y-8">
              <div className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                harum dolor inventore ut sint, natus itaque sequi minima
                necessitatibus consequatur doloribus maiores doloremque dicta
                explicabo incidunt, quaerat sed animi nemo. Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Ipsum harum dolor
                inventore ut sint, natus itaque sequi minima necessitatibus
                consequatur doloribus maiores doloremque dicta explicabo
                incidunt, quaerat sed animi nemo. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Atque veniam aperiam illo modi
                porro perspiciatis suscipit aliquid dicta ipsum eius? Temporibus
                voluptatem inventore reprehenderit minima tempora nesciunt dolor
                ab? Necessitatibus?
              </div>

              <div className="flex justify-around items-center">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-6 h-6">
                      <Image
                        src={github}
                        layout="fill"
                        objectFit="cover"
                        alt=""
                      />
                    </div>
                    <Link href={"https://github.com/jangth0655"}>
                      <a className="cursor-pointer hover:text-teal-400 transition-all">
                        My GitHub
                      </a>
                    </Link>
                  </div>
                  <div className="flex items-center space-x-4">
                    <svg
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <span
                      onClick={() => copyToClipboard("jangth0655@gmail.com")}
                      className="cursor-pointer hover:text-teal-400 transition-all"
                    >
                      jangth0655@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <svg
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <span className="hover:text-teal-400 transition-all">
                      010-4185-0655
                    </span>
                  </div>
                </div>
                <button
                  onClick={showPreviewProjects}
                  className="mt-0 sm:mt-4 flex items-center space-x-2 px-2 rounded-lg bg-teal-300 hover:bg-teal-500 transition-all text-zinc-800"
                >
                  <span className="">Projects</span>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        <main>
          <div className="w-full mt-10 sm:mt-0 py-4 shadow-black shadow-lg grid grid-cols-4 gap-4 sm:grid-cols-7 bg-zinc-900">
            {myToolName.map((name) => (
              <div key={name} className="m-auto">
                <ToolImg tool={name} />
              </div>
            ))}
          </div>
          <div ref={projectsSectionRef}>
            <SeeProjects />
          </div>
        </main>
      </section>
    </Layout>
  );
};

export default Home;
