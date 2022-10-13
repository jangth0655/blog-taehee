import type { NextPage } from "next";
import Layout, { navTitle } from "../components/Layout";

import Image from "next/image";
import github from "../public/assets/headerImage/github.png";
import avatar from "../public/assets/avatar/avatar.jpeg";
import Link from "next/link";
import SeeProjects from "../components/home/HomeProjects";
import { useRef, useState } from "react";
import Button from "../components/Button";
import cls from "../libs/cls";

import { HiMail } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import { BiChevronsDown } from "react-icons/bi";

import { useRouter } from "next/router";
import Observer from "../components/home/Observer";
import { motion, Variants } from "framer-motion";

const downScrollVar: Variants = {
  animate: {
    opacity: [0, 1, 0],
    transition: {
      repeat: Infinity,
    },
  },
};

const Home: NextPage = () => {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const downScrollRef = useRef<HTMLDivElement>(null);
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

  const navPage = (path: string) => {
    if (!path) {
      router.push("/");
    }
    router.push(path);
  };

  const postArray = navTitle.filter(
    (title) => title.name !== "Home" && title.name !== "Projects"
  );

  return (
    <Layout head="Taehee" back={false} isHome={true}>
      <section className="max-w-3xl m-auto">
        <header className=" text-zinc-200 pt-10 pb-2 px-4 space-y-20">
          <div className="flex flex-col w-full items-center justify-center sm:justify-evenly sm:flex-row sm:items-center">
            <div className="flex items-center">
              <div className="w-2 h-14 bg-zinc-600 mr-4" />
              <div>
                <h1 className="text-2xl font-bold"> Jang Tae Hee</h1>
                <h5 className="text-lg">✨ Future Junior FrontEnd Developer</h5>
              </div>
            </div>
            <div className="mt-10 relative w-44 h-44 rounded-full border-zinc-700 shadow-black shadow-lg">
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

          {/* contact */}
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              {/* github */}
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
              {/* email */}
              <div className="flex items-center space-x-4">
                <HiMail size={24} />
                <div
                  onClick={() => copyToClipboard("jangth0655@gmail.com")}
                  className={cls(
                    "cursor-pointer hover:text-teal-400 transition-all",
                    copied ? "text-rose-500 hover:text-rose-500 font-bold" : ""
                  )}
                >
                  {copied ? "Copied to clipboard" : "jangth0655@gmail.com"}
                </div>
              </div>
              {/* phone */}
              <div className="flex items-center space-x-4">
                <HiPhone size={20} />
                <span className="hover:text-teal-400 transition-all">
                  010-4185-0655
                </span>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-block font-bold mb-2">Note 📒</span>
            <div className="grid grid-cols-3 border-2 p-2 border-zinc-500 rounded-lg shadow-black shadow-lg">
              {postArray.map((title) => (
                <div
                  className="font-bold flex items-center justify-center text-zinc-400 hover:text-zinc-50 transition-all cursor-pointer"
                  key={title.id}
                >
                  <span
                    className="inline-block px-2 py-1"
                    onClick={() => navPage(title.path)}
                  >
                    {title.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </header>
      </section>
    </Layout>
  );
};

export default Home;
