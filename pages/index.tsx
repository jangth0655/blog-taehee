import type { NextPage } from "next";
import Layout from "../components/Layout";
import ToolImg from "../components/home/ToolImg";
import Image from "next/image";
import headerImg from "../public/assets/headerImage/coding.jpg";
import github from "../public/assets/headerImage/github.png";
import avatar from "../public/assets/avatar/profile.png";
import Link from "next/link";
import SeeProjects from "../components/home/HomeProjects";

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
      <section className="min-h-screen flex flex-col justify-center">
        <header className="h-screen sm:h-[40rem] w-full">
          <div className="h-full relative">
            <Image
              src={headerImg}
              layout="fill"
              objectFit="cover"
              alt=""
              placeholder="blur"
              priority
            />
            <div className="bg-zinc-900 opacity-80 absolute w-full h-full" />

            <div className="text-white absolute w-full h-full md:flex p-2 pb-0 px-20">
              <div className="w-full justify-center sm:justify-between p-2 text-zinc-300 flex flex-col h-[100%] ">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <span className="mr-2 text-xl">✨</span>
                    <span className="text-2xl font-bold">Jang Tae Hee</span>
                  </div>
                  <span className="inline-block mt-2 mb-4 text-lg">
                    Future FrontEnd Developer
                  </span>
                  <p className="w-full lg:w-[100%] h-[80%]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus quia nostrum eveniet ex ducimus vero iste quae
                    molestias? Veniam, laborum porro? Accusantium modi magni
                    pariatur et deserunt? Neque, tempore nostrum. Lorem, ipsum
                    dolor sit amet consectetur adipisicing elit. Temporibus quia
                    nostrum eveniet ex ducimus vero iste quae molestias? Veniam,
                    laborum porro? Accusantium modi magni pariatur et deserunt?
                    Neque, tempore nostrum.
                  </p>
                </div>

                <div className="space-y-2 mt-14 ">
                  <div className="flex space-x-4 cursor-pointer">
                    <div className="relative w-6 h-6">
                      <Image
                        src={github}
                        layout="fill"
                        objectFit="cover"
                        alt=""
                      />
                    </div>
                    <Link href="https://github.com/jangth0655">
                      <a className="text-white transition-all hover:text-teal-300">
                        <span>Taehee GitHub</span>
                      </a>
                    </Link>
                  </div>

                  <div className="flex space-x-4 items-center ">
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <div>
                      <span
                        onClick={() => copyToClipboard("jangth0655@gmail.com")}
                        className="text-white transition-all cursor-pointer hover:text-teal-300"
                      >
                        jangth0655@gmail.com
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-4 items-center">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-white transition-all hover:text-teal-300">
                      010 4185 0655
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full sm:h-[100%] flex items-end">
                <div className="relative w-[100%] hidden md:block h-[90%]">
                  <Image
                    className="object-cover xl:object-contain"
                    layout="fill"
                    src={avatar}
                    alt=""
                    priority
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        <main>
          <div className="w-full py-4  shadow-black shadow-lg grid grid-cols-4 gap-4 sm:grid-cols-7 bg-zinc-900">
            {myToolName.map((name) => (
              <div key={name} className="m-auto">
                <ToolImg tool={name} />
              </div>
            ))}
          </div>
          <div className="">
            <SeeProjects />
          </div>
        </main>
      </section>
    </Layout>
  );
};

export default Home;
