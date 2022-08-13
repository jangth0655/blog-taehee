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

interface LayoutProps {
  children: React.ReactNode;
  head?: string;
  category?: string;
}

type NavTitle = {
  name: string;
  id: string;
  path: string;
};

const navTitle: NavTitle[] = [
  { name: "Javascript", id: "js", path: "/posts/js" },
  { name: "Typescript", id: "typescript", path: "/posts/ts" },
  { name: "NodeJs", id: "nodejs", path: "/posts/nodejs" },
  { name: "React", id: "react", path: "/posts/react" },
  { name: "NextJs", id: "nextjs", path: "/posts/nextjs" },
  { name: "Books", id: "books", path: "/posts/books" },
];

const scrollVariant: Variants = {
  top: {
    opacity: 0,
  },
  scroll: {
    opacity: 0.6,
  },
};

const Layout: React.FC<LayoutProps> = ({ children, head, category }) => {
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
    <section className="bg-gray-900 text-white">
      <Head>
        <title>{`${head} | Blog`}</title>
      </Head>
      <nav
        ref={navRef}
        className="flex items-center justify-between p-4 bg-gray-900"
      >
        <div className="flex items-center space-x-4">
          <Link href="/">
            <a className="relative w-10 h-10">
              <Image src={logo} layout="fill" objectFit="cover" alt="" />
            </a>
          </Link>
          <span>TaeHee Blog</span>
        </div>

        {windowSize > 765 ? (
          <div className="space-x-2 flex items-center">
            {navTitle.map((title) => (
              <div key={title.id} onClick={() => navPage(title.path)}>
                <div className="relative px-1 text-gray-400 hover:text-white transition-all cursor-pointer">
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
            className="origin-top absolute w-full top-16 bg-black py-4"
          >
            <div className="space-y-4 px-4">
              {navTitle.map((title) => (
                <div
                  onClick={() => navPage(title.id)}
                  key={title.id}
                  className="text-gray-400 z-20 hover:text-white transition-all cursor-pointer text-sm"
                >
                  <span>{title.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* main */}
      <main
        onClick={() => setShowingNav(false)}
        className="max-w-4xl m-auto px-3"
      >
        <div className="my-4 w-6 h-6 border-2 rounded-lg flex justify-center items-center border-slate-300 hover:bg-gray-200 transition-all hover:text-gray-800 text-gray-400 cursor-pointer ">
          <svg
            onClick={() => goBack()}
            className="h-4 w-4"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
        </div>
        <div className="mt-12 min-h-screen px-4 pb-2">
          {children}
          <motion.div
            onClick={() => onTop()}
            variants={scrollVariant}
            initial="top"
            animate={scrollAnimation}
            className="fixed w-6 h-6 bg-red-500 opacity-60 hover:opacity-100 transition-all bottom-2 right-4 rounded-full cursor-pointer flex justify-center items-center"
          >
            <svg
              className="h-5 w-5 text-white"
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
    </section>
  );
};
export default Layout;
