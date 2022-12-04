import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';
import logo from '../public/logo/logo.png';

import { motion, useAnimation, useScroll, Variants } from 'framer-motion';

import cls from '../libs/cls';
import Navbar from './home/navbar/Navbar';

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

const Layout: React.FC<LayoutProps> = ({
  children,
  head,
  back = true,
  isHome = false,
}) => {
  const router = useRouter();
  const navRef = useRef<HTMLDivElement>(null);

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
    navRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <section className='bg-zinc-900 text-white'>
        <Head>
          <title>{`${head} | taehee's blog`}</title>
        </Head>
        <Navbar />

        <main className='pt-4'>
          {back ? (
            <div
              onClick={() => goBack()}
              className='max-w-3xl m-auto mt-10 mb-20 ml-5 w-8 h-8 rounded-lg flex justify-center items-center transition-all  text-zinc-100 cursor-pointer bg-teal-700 hover:bg-teal-500 shadow-black shadow-lg'
            >
              <svg
                className='h-5 w-5'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path d='M7 16l-4-4m0 0l4-4m-4 4h18' />
              </svg>
            </div>
          ) : null}
          <div
            className={cls(
              'min-h-screen',
              isHome ? '' : 'max-w-4xl m-auto pb-2 px-7 overflow-x-scroll'
            )}
          >
            {children}
            <motion.div
              onClick={() => onTop()}
              variants={scrollVariant}
              initial='top'
              animate={scrollAnimation}
              className='fixed w-6 h-6 sm:w-8 sm:h-8 bg-teal-400 transition-all bottom-2 right-4 rounded-full cursor-pointer flex justify-center items-center hover:bg-teal-600'
            >
              <svg
                className='w-4 h-4 sm:h-6 sm:w-6 text-white'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path d='M7 11l5-5m0 0l5 5m-5-5v12' />
              </svg>
            </motion.div>
          </div>
        </main>

        <footer className='py-6 flex justify-center items-center w-full space-x-2'>
          <div className='relative w-4 h-4'>
            <Image src={logo} layout='fill' objectFit='cover' alt='' />
          </div>
          <span className='text-xs text-zinc-500'>
            Ⓒ2022 JangTaeHee. All Rights Reserved.
          </span>
        </footer>
      </section>
    </>
  );
};
export default Layout;
