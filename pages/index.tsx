import type { NextPage } from 'next';

import Layout from '../components/Layout';
import PostBoarder from '../components/home/PostBoarder';
import Header from '../components/home/Header';
import useNavbar from '../hooks/useNavbar';
import { readdirSync } from 'fs';
import { NavId } from '../model/types';
import NextSEO from '../components/NextSEO';

type BlogCount = {
  id: NavId;
  count: number;
};

const Home: NextPage<{ blogFiles: BlogCount[] }> = ({ blogFiles }) => {
  const { navbars } = useNavbar();

  return (
    <Layout back={false}>
      <NextSEO title='Home' />
      <Header />
      <div className='flex flex-col w-full'>
        <div className='sm:mt-28 mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 m-auto lg:grid-cols-3'>
          {navbars.slice(1).map((navbar) => (
            <PostBoarder
              key={navbar.id}
              title={navbar.name}
              subTitle={navbar.subTitle}
              page={navbar.name}
              count={blogFiles.find((blog) => blog.id === navbar.id)?.count}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = () => {
  const jsCount = readdirSync(`${process.cwd()}/data/javascript`).length;
  const typescriptCount = readdirSync(
    `${process.cwd()}/data/typescript`
  ).length;
  const reactCount = readdirSync(`${process.cwd()}/data/react`).length;
  const errorCount = readdirSync(`${process.cwd()}/data/error-handling`).length;
  const blogFiles: BlogCount[] = [
    {
      id: 'js',
      count: jsCount,
    },
    {
      id: 'typescript',
      count: typescriptCount,
    },
    {
      id: 'react',
      count: reactCount,
    },
    {
      id: 'error-handling',
      count: errorCount,
    },
  ];
  return {
    props: {
      blogFiles: JSON.parse(JSON.stringify(blogFiles)),
    },
  };
};

export default Home;
