import type { NextPage } from 'next';
import { useState } from 'react';

import Layout from '../components/Layout';
import PostBoarder from '../components/home/PostBoarder';
import Header from '../components/home/Header';
import useNavbar from '../hooks/useNavbar';

const Home: NextPage = () => {
  const { navbars } = useNavbar();
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
    <Layout back={false} head='Home'>
      <Header />
      <div className='flex flex-col w-full'>
        <div className='sm:mt-28 mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 m-auto lg:grid-cols-3'>
          {navbars.slice(1).map((navbar) => (
            <PostBoarder
              key={navbar.id}
              title={navbar.name}
              url={navbar.url}
              page={navbar.name}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
