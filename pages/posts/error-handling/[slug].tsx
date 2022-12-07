import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import Layout from '../../../components/Layout';
import NextSEO from '../../../components/NextSEO';
import { Data } from '../../../model/interface';
import { blog } from '../../../module/Blog';

const ErrorHandlingDetail: NextPage<{ post: string; data: Data }> = ({
  post,
  data,
}) => {
  return (
    <Layout category='error-handling' head='Error-Handling'>
      <NextSEO isDetail title={data.title} description={data.subTitle} />
      <div>
        <div className='post' dangerouslySetInnerHTML={{ __html: post }} />
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: blog.parseFilePath('error-handling'),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const { data, value } = await blog.parseMarkdown(
    'error-handling',
    ctx.params.slug
  );

  return {
    props: {
      post: value,
      data,
    },
  };
};
export default ErrorHandlingDetail;
