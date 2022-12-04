import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useScroll, Variants } from 'framer-motion';
import { AiOutlineArrowLeft, AiOutlineArrowUp } from 'react-icons/ai';

import Navbar from './Layout/navbar/Navbar';
import Button from './Button';

interface LayoutProps {
  children: React.ReactNode;
  head?: string;
  category?: string;
  back?: boolean;
  isHome?: boolean;
}

const scrollVariant: Variants = {
  top: {
    opacity: 0,
  },
  scroll: {
    opacity: 1,
  },
};

const Layout: React.FC<LayoutProps> = ({ children, head, back = true }) => {
  const router = useRouter();
  const topRef = useRef<HTMLDivElement>(null);

  const goBack = () => {
    router.back();
  };

  const scrollAnimation = useAnimation();
  const { scrollY } = useScroll();
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() < window.innerHeight / 2) {
        scrollAnimation.start('top');
      } else {
        scrollAnimation.start('scroll');
      }
    });
  }, [scrollY, scrollAnimation]);

  const onTop = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <section ref={topRef} className='bg-zinc-900 text-white'>
        <Head>
          <title>{`${head} | taehee's blog`}</title>
        </Head>
        <Navbar />

        <main className='pt-4 px-6 xs:px-0 max-w-7xl m-auto min-h-screen pb-10'>
          {back && (
            <div
              onClick={() => goBack()}
              className='max-w-3xl m-auto mt-10 mb-20 ml-5 w-8 h-8'
            >
              <Button>
                <AiOutlineArrowLeft />
              </Button>
            </div>
          )}
          {children}
          <motion.div
            onClick={() => onTop()}
            variants={scrollVariant}
            initial='top'
            animate={scrollAnimation}
            className='fixed w-6 h-6 sm:w-8 sm:h-8 bottom-4 right-4'
          >
            <Button>
              <AiOutlineArrowUp />
            </Button>
          </motion.div>
        </main>
      </section>
    </>
  );
};
export default Layout;
