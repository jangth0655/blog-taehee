import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import Layout from '../../../components/Layout/Layout';
import { blog } from '../../../module/Blog';
import { Data } from '../../../model/interface';
import NextSEO from '../../../components/NextSEO';
import DetailContent from '../../../components/detail/DetailContent';

const TypescriptDetail: NextPage<{ post: string; data: Data }> = ({
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
    paths: blog.parseFilePath('typescript'),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const { data, value } = await blog.parseMarkdown(
    'typescript',
    ctx.params.slug
  );
  return {
    props: {
      post: value,
      data,
    },
  };
};

export default TypescriptDetail;
