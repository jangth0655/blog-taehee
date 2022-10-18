import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import logo from "../public/logo/logo.png";

import {
  AnimatePresence,
  motion,
  useAnimation,
  useScroll,
  Variants,
} from "framer-motion";
import Link from "next/link";
import cls from "../libs/cls";

interface LayoutProps {
  children: React.ReactNode;
  head?: string;
  category?: string;
  back?: boolean;
  isHome?: boolean;
}

type NavTitle = {
  name: string;
  id: string;
  path: string;
};

export const navTitle: NavTitle[] = [
  { name: "Home", id: "home", path: "/" },
  { name: "Javascript", id: "js", path: "/posts/js" },
  { name: "Typescript", id: "typescript", path: "/posts/typescript" },
  { name: "React", id: "react", path: "/posts/react" },
  { name: "NextJs", id: "nextjs", path: "/posts/nextjs" },
  {
    name: "Error handling",
    id: "error-handling",
    path: "/posts/error-handling",
  },
  { name: "Projects", id: "projects", path: "/posts/myProjects" },
];

const scrollVariant: Variants = {
  top: {
    opacity: 0,
  },
  scroll: {
    opacity: 1,
  },
};

const Layout: React.FC<LayoutProps> = ({
  children,
  head,
  category,
  back = true,
  isHome = false,
}) => {
  const router = useRouter();
  const navPage = (path: string) => {
    if (!path) {
      router.push("/");
    }
    router.push(path);
  };
  const [windowSize, setWindowSize] = useState(0);
  const [showingNav, setShowingNav] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const handleSize = useCallback(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, [handleSize]);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  const navVariant: Variants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
    },
    exit: {
      scaleY: 0,
    },
  };

  const goBack = () => {
    router.back();
  };

  const scrollAnimation = useAnimation();
  const { scrollY } = useScroll();
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() < window.innerHeight / 2) {
        scrollAnimation.start("top");
      } else {
        scrollAnimation.start("scroll");
      }
    });
  }, [scrollY, scrollAnimation]);

  const onTop = () => {
    navRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section className="bg-zinc-900 text-white">
        <Head>
          <title>{`${head}. homepage`}</title>
        </Head>
        <nav
          ref={navRef}
          className="flex items-center justify-between p-4 bg-zinc-900 "
        >
          <div className="flex items-center space-x-4">
            <Link href={`/`}>
              <a className="relative w-10 h-10">
                <Image
                  src={logo}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  alt=""
                  property=""
                />
              </a>
            </Link>
            <Link href={`/`}>
              <a>
                <span>TaeHee</span>
              </a>
            </Link>
          </div>

          {windowSize > 765 ? (
            <div className="space-x-2 flex items-center">
              {navTitle.map((title) => (
                <div key={title.id} onClick={() => navPage(title.path)}>
                  <div className="relative px-1 text-zinc-300 hover:text-white transition-all cursor-pointer lg:px-4">
                    <span className="text-sm">{title.name}</span>
                    {router.pathname === title.path && (
                      <motion.span
                        className="w-1 h-1 rounded-full bg-rose-500 absolute right-0 m-auto -bottom-1 left-0 "
                        layoutId="circle"
                      />
                    )}
                    {title.id === category && (
                      <motion.span
                        className="w-1 h-1 rounded-full bg-rose-500 absolute right-0 m-auto -bottom-1 left-0 "
                        layoutId="circle"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              onClick={() => setShowingNav((prev) => !prev)}
              className="px-2 hover:text-rose-500 cursor-pointer transition-all"
            >
              <svg className="h-6 w-6 " viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </nav>
        <AnimatePresence>
          {showingNav && windowSize < 768 ? (
            <motion.div
              variants={navVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                type: "linear",
              }}
              className="origin-top absolute w-full top-16 bg-black py-4 z-10"
            >
              <div className="space-y-6 px-4">
                {navTitle.map((title) => (
                  <div
                    onClick={() => navPage(title.path)}
                    key={title.id}
                    className="text-zinc-400 hover:text-white transition-all cursor-pointer text-sm"
                  >
                    <span>{title.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <main className="pt-4" onClick={() => setShowingNav(false)}>
          {back ? (
            <div className="max-w-3xl m-auto mt-10 mb-20 ml-5 w-8 h-8 rounded-lg flex justify-center items-center transition-all  text-zinc-100 cursor-pointer bg-teal-700 hover:bg-teal-500 shadow-black shadow-lg">
              <svg
                onClick={() => goBack()}
                className="h-5 w-5"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
            </div>
          ) : null}
          <div
            className={cls(
              "min-h-screen",
              isHome ? "" : "max-w-4xl m-auto pb-2 px-7 overflow-x-scroll"
            )}
          >
            {children}
            <motion.div
              onClick={() => onTop()}
              variants={scrollVariant}
              initial="top"
              animate={scrollAnimation}
              className="fixed w-6 h-6 sm:w-8 sm:h-8 bg-teal-400 transition-all bottom-2 right-4 rounded-full cursor-pointer flex justify-center items-center hover:bg-teal-600"
            >
              <svg
                className="w-4 h-4 sm:h-6 sm:w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 11l5-5m0 0l5 5m-5-5v12" />
              </svg>
            </motion.div>
          </div>
        </main>
        <footer className="py-6 flex justify-center items-center w-full space-x-2">
          <div className="relative w-4 h-4">
            <Image src={logo} layout="fill" objectFit="cover" alt="" />
          </div>
          <span className="text-xs text-zinc-500">
            Ⓒ2022 JangTaeHee. All Rights Reserved.
          </span>
        </footer>
      </section>
    </>
  );
};
export default Layout;
