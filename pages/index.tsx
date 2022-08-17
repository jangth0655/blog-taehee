import type { NextPage } from "next";
import Layout from "../components/Layout";
import ToolImg from "../components/home/ToolImg";
import Image from "next/image";
import headerImg from "../public/assets/headerImage/coding.jpg";
import github from "../public/assets/headerImage/github.png";
import avatar from "../public/assets/avatar/profile.png";
import Link from "next/link";

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
  return (
    <Layout head="My Blogs" back={false} applyMaxWith={false} isHome={true}>
      <section className="min-h-screen flex flex-col justify-center">
        <header className="h-[38rem] pt-2">
          <div className="h-full relative">
            <Image src={headerImg} layout="fill" objectFit="cover" alt="" />
            <div className="bg-gray-900 opacity-80 absolute w-full h-full" />
            <div className="text-white absolute w-full h-full sm:flex p-2">
              <div className="w-full md:w-[90%] p-2 text-gray-300 flex flex-col h-[100%] justify-around">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold">Jang Tae Hee</span>
                  <span className="inline-block mt-2 mb-4 text-xl">
                    Front web developer
                  </span>
                  <p className="">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum sed consectetur a adipisci natus illo nulla, qui
                    animi, aspernatur accusamus temporibus. Et ex, excepturi
                    beatae voluptate praesentium voluptatibus repellat neque.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum sed consectetur a adipisci natus illo nulla, qui
                    animi, aspernatur accusamus temporibus. Et ex, excepturi
                    beatae voluptate praesentium voluptatibus repellat neque.
                  </p>
                </div>
                <div className="space-y-3 mt-10">
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
                      <a className="hover:text-white transition-all">
                        https://github.com/jangth0655
                      </a>
                    </Link>
                  </div>

                  <div className="flex space-x-4 items-center">
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <Link href="https://mail.google.com/mail/">
                      <span className="hover:text-white transition-all cursor-pointer">
                        jangth0655@gmail.com
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative w-0 md:w-[50%] h-0 md:h-[100%] ">
                <Image
                  className="object-cover xl:object-contain"
                  layout="fill"
                  src={avatar}
                  alt=""
                />
              </div>
            </div>
          </div>
        </header>

        <main className="">
          <div className="w-full p-4 m-auto shadow-black shadow-lg grid grid-cols-3 gap-4 sm:grid-cols-7 bg-gray-900 ">
            {myToolName.map((name) => (
              <div key={name} className="m-auto">
                <ToolImg tool={name} />
              </div>
            ))}
          </div>
        </main>
      </section>
    </Layout>
  );
};

export default Home;
