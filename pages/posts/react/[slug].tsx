import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import Layout from '../../../components/Layout';
import { blog } from '../../../module/Blog';

const ReactDetailPage: NextPage<{ post: string }> = ({ post }) => {
  return (
    <Layout category='react' head='React'>
      <div className=''>
        <div className='post' dangerouslySetInnerHTML={{ __html: post }} />
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: blog.parseFilePath('react'),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const { data, value } = await blog.parseMarkdown('react', ctx.params.slug);

  return {
    props: {
      post: value,
      data,
    },
  };
};
export default ReactDetailPage;
