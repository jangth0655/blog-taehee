import { readdirSync } from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse/lib";
import { unified } from "unified";
import { Context } from "vm";
import Layout from "../../../components/Layout";

const ReactDetailPage: NextPage<{ post: string }> = ({ post }) => {
  return (
    <Layout>
      <div className="">
        <div className="post" dangerouslySetInnerHTML={{ __html: post }} />
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = readdirSync("./data/react").map((file) => {
    const [name, extension] = file.split(".");
    return { params: { slug: name } };
  });
  return {
    paths: files,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx: Context) => {
  const { content, data } = matter.read(`./data/react/${ctx.params.slug}.md`);
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
export default ReactDetailPage;
