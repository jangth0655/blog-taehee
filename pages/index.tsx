import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { HiMail } from 'react-icons/hi';
import { HiPhone } from 'react-icons/hi';

import Layout from '../components/Layout';
import cls from '../libs/cls';
import github from '../public/assets/headerImage/github.png';
import avatar from '../public/assets/avatar/avatar.jpeg';

import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

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
    <Layout head='Home' back={false} isHome={true}>
      <section className='max-w-3xl m-auto'>
        <header className=' text-zinc-200 pt-10 pb-2 px-4 space-y-20'>
          <div className='flex flex-col w-full items-center justify-center sm:justify-evenly sm:flex-row sm:items-center'>
            <div className='flex items-center'>
              <div className='w-2 h-14 bg-zinc-600 mr-4' />
              <div>
                <h1 className='text-2xl font-bold'> Jang Tae Hee</h1>
                <h5 className='text-lg'>✨ Future Junior FrontEnd Developer</h5>
              </div>
            </div>
            <div className='mt-10 relative w-44 h-44 rounded-full border-zinc-700 shadow-black shadow-lg'>
              <Image
                className='rounded-full'
                src={avatar}
                layout='fill'
                objectFit='cover'
                placeholder='blur'
                alt=''
              />
            </div>
          </div>
        </header>
      </section>
    </Layout>
  );
};

export default Home;
