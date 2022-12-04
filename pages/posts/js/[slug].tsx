import { readdirSync } from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse/lib';
import { unified } from 'unified';
import Layout from '../../../components/Layout';
import { blog } from '../../../libs/Blog';

interface Data {
  title: string;
  category: string;
  name: string;
}

const JsFileDetail: NextPage<{ post: string; data: Data }> = ({
  post,
  data,
}) => {
  return (
    <Layout head='AboutJS' category={data.category}>
      <div className=''>
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
