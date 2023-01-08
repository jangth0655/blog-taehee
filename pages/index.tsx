import type { GetStaticProps, NextPage } from 'next';

import Layout from '../components/Layout/Layout';
import PostBoarder from '../components/home/PostBoarder';
import Header from '../components/home/Header';
import useNavbar from '../hooks/useNavbar';
import { BlogCount } from '../model/types';
import { blog } from '../module/Blog';
import NextSEO from '../components/NextSEO';

const Home: NextPage<{ blogFiles: BlogCount[] }> = ({ blogFiles }) => {
  const accumulatorTotalPost = (blogFiles: BlogCount[]) => {
    const counts = blogFiles.map((item) => item.count);
    return counts.reduce((acc, cur) => (acc += cur), 0);
  };
  const { navbars } = useNavbar();

  return (
    <Layout back={false}>
      <NextSEO title='Home' />
      <Header />
      <div className='flex flex-col w-full'>
        <div className='mt-10 space-x-4 text-2xl font-bold'>
          <span className=''>Total Post</span>
          <span>{accumulatorTotalPost(blogFiles)}</span>
        </div>
        <div className='sm:mt-16 mt-10 grid grid-cols-1 gap-16 sm:grid-cols-2 m-auto lg:grid-cols-3'>
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

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      blogFiles: blog.fileCountData,
    },
  };
};

export default Home;
