import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import Layout from '../../../components/Layout';
import NextSEO from '../../../components/NextSEO';
import { blog } from '../../../module/Blog';

interface Data {
  title: string;
  category: string;
  name: string;
  subTitle?: string;
}

const JsFileDetail: NextPage<{ post: string; data: Data }> = ({
  post,
  data,
}) => {
  return (
    <Layout category={data.category}>
      <NextSEO title={data.title} description={data.subTitle} />
      <div>
        <div className='post' dangerouslySetInnerHTML={{ __html: post }} />
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: blog.parseFilePath('javascript'),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const { data, value } = await blog.parseMarkdown(
    'javascript',
    ctx.params.slug
  );
  return {
    props: {
      post: value,
      data,
    },
  };
};
export default JsFileDetail;
