import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import DetailContent from '../../../components/detail/DetailContent';

import Layout from '../../../components/Layout/Layout';
import NextSEO from '../../../components/NextSEO';
import { Data } from '../../../model/interface';
import { blog } from '../../../module/Blog';

const JsFileDetail: NextPage<{ post: string; data: Data }> = ({
  post,
  data,
}) => {
  return (
    <Layout category={data.category}>
      <NextSEO isDetail title={data.title} description={data.subTitle} />
      <DetailContent post={post} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: blog.parseFilePath('basic-cs'),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const { data, value } = await blog.parseMarkdown('basic-cs', ctx.params.slug);
  return {
    props: {
      post: value,
      data,
    },
  };
};
export default JsFileDetail;
