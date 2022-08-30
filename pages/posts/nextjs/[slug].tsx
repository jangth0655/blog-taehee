import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse/lib";
import { unified } from "unified";
import Layout from "../../../components/Layout";
import { Data } from "../../../libs/shared/shared";

const NextJSFileDetail: NextPage<{ post: string; data: Data }> = ({
  post,
  data,
}) => {
  return (
    <Layout head="NextJS" category={data.category}>
      <div>
        <div className="post" dangerouslySetInnerHTML={{ __html: post }} />
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const { content, data } = matter.read(`./data/nextjs/${ctx.params.slug}.md`);
  const { value } = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content);
  return {
    props: {
      post: value,
      data,
    },
  };
};

export default NextJSFileDetail;
