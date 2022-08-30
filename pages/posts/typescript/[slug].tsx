import { readdirSync } from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse/lib";
import { unified } from "unified";
import Layout from "../../../components/Layout";
import { Data } from "../../../libs/shared/shared";

const TypescriptDetail: NextPage<{ post: string; data: Data }> = ({
  post,
  data,
}) => {
  return (
    <Layout head="AboutTS" category={data.category}>
      <div className="">
        <div className="post" dangerouslySetInnerHTML={{ __html: post }} />
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = readdirSync("./data/typescript").map((file) => {
    const [slug, extension] = file.split(".");
    return { params: { slug } };
  });
  return {
    paths: files,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const { content, data } = matter.read(
    `./data/typescript/${ctx.params.slug}.md`
  );
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

export default TypescriptDetail;
