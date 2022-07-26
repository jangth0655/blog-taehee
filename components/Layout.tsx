import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import logo from "../public/logo/logo.png";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
  head?: string;
}

type NavTitle = {
  name: string;
  id: string;
  path: string;
};

const navTitle: NavTitle[] = [
  { name: "Javascript", id: "js", path: "/posts/js" },
  { name: "React", id: "react", path: "/posts/react" },
  { name: "NextJs", id: "nextjs", path: "/posts/nextjs" },
  { name: "About", id: "about", path: "/about" },
];

const Layout: React.FC<LayoutProps> = ({ children, head }) => {
  const router = useRouter();
  const navPage = (path: string) => {
    if (!path) {
      router.push("/");
    }
    router.push(path);
  };
  const [windowSize, setWindowSize] = useState(0);
  const [showingNav, setShowingNav] = useState(false);

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

  return (
    <section className="bg-neutral-900 text-white">
      <Head>
        <title>{head}</title>
      </Head>
      <nav className="flex items-center justify-between p-4 bg-neutral-900">
        <div className="flex items-center space-x-4">
          <Link href={"/"}>
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
                <span className="relative px-2 text-gray-400 hover:text-white transition-all cursor-pointer">
                  {title.name}
                  {router.pathname === title.path && (
                    <motion.span
                      className="w-1 h-1 rounded-full bg-rose-500 absolute right-0 m-auto -bottom-3 left-0 "
                      layoutId="circle"
                    />
                  )}
                </span>
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
                  className="text-gray-400 z-20 hover:text-white transition-all cursor-pointer"
                >
                  <span>{title.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* main */}
      <main onClick={() => setShowingNav(false)} className="px-6">
        <div className="mt-24 min-h-screen ">{children}</div>
      </main>
    </section>
  );
};
export default Layout;
