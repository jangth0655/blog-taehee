import type { NextPage } from "next";
import Layout from "../components/Layout";
import ToolImg from "../components/home/ToolImg";
import Image from "next/image";
import github from "../public/assets/headerImage/github.png";
import avatar from "../public/assets/avatar/avatar.jpeg";
import Link from "next/link";
import SeeProjects from "../components/home/HomeProjects";
import { useRef, useState } from "react";
import Button from "../components/Button";
import cls from "../libs/cls";

const myToolName = [
  "javascript",
  "typescript",
  "css",
  "html",
  "react",
  "nodejs",
  "tailwind",
  "graphql",
];

const Home: NextPage = () => {
  const [copied, setCopied] = useState(false);
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
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (error) {
      console.log(`error : ${error}`);
    }
  };

  return (
    <Layout head="Taehee" back={false} isHome={true}>
      <section className="">
        <header className="sm:h-[44rem] m-auto text-zinc-200">
          <div className="w-full max-w-2xl m-auto h-full pt-10 pb-2 px-3 sm:px-0">
            <div className="flex flex-col w-full items-center justify-center sm:justify-around sm:flex-row sm:items-center mb-6">
              <div className="space-y-3 flex items-center">
                <div className="w-2 h-14 bg-zinc-600 mr-4" />
                <div>
                  <h1 className="text-2xl font-bold"> Jang Tae Hee</h1>
                  <h5 className="text-lg">
                    ✨ Future Junior FrontEnd Developer
                  </h5>
                </div>
              </div>
              <div className="mt-6 sm:mt-0 relative w-32 h-32 sm:w-44 sm:h-44  rounded-full border-zinc-700">
                <Image
                  className="rounded-full"
                  src={avatar}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  alt=""
                />
              </div>
            </div>
            <div className="space-y-10">
              <div className="">
                안녕하십니까. 성장하고 도전하는 것에 두려움이 없는 신입 주니어
                프론트엔드 엔지니어 장태희입니다.<br></br>한가지 분야에 전문성을
                쌓고자 꾸준히 노력하는 중이며 이를 위해 javascript와 React를
                기반으로 개인프로젝트 UI개발 경험을 즐기고 있습니다. 뿐만 아니라
                NexJs와 NodeJs를 접하고 공부하여 서버 구현과 데이터베이스,
                배포까지 경험 하고 Graphql에 대해 궁금하여 Graphql을 통한 웹
                개발도 하면서 점점 더 웹개발에 매력에 빠져가고있습니다. 또한
                Socket과 React-Native도 관심이 생겨 개발 공부를 진행중입니다.
                <br></br>
                <br></br>
                누군가가 내가 만든 웹 서비스를 이용하고 호평 혹은 칭찬을 하거나
                피드백을 받고 좀 더 개선된 웹서비스를 개발하여 스스로 발전하는
                모습을 볼 때면 뿌듯하고 점점 더 발전하고자 노력하려고 합니다.
                이렇게 저는 개발하는 것이 즐겁고 끊임없이 성장하고 도전하고자
                합니다.
                <br></br>
                따라서 저를 선택해주시는 여러분들과 함께 성장하고 발전해 나가고
                싶습니다.&ensp;감사합니다.
              </div>

              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-6 h-6">
                      <Image
                        src={github}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
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
                    <div
                      onClick={() => copyToClipboard("jangth0655@gmail.com")}
                      className={cls(
                        "cursor-pointer hover:text-teal-400 transition-all",
                        copied
                          ? "text-rose-500 hover:text-rose-500 font-bold"
                          : ""
                      )}
                    >
                      {copied ? "Copied to clipboard" : "jangth0655@gmail.com"}
                    </div>
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
                <div onClick={showPreviewProjects}>
                  <Button direction="bottom" text="Projects" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="mt-20 min-h-screen space-y-20">
          <div className="w-full sm:mt-0 pb-2 shadow-black shadow-lg grid grid-cols-4 gap-4 sm:grid-cols-8 bg-zinc-900">
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
