import { readdirSync } from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse/lib";
import { unified } from "unified";
import Layout from "../../../components/Layout";
import { Data } from "../../shared/shared";

const ProjectsDetail: NextPage<{ post: string; data: Data }> = ({
  post,
  data,
}) => {
  return (
    <Layout>
      <div className="flex items-center space-x-2 mb-10">
        <span>🔥</span>
        <h1 className="uppercase font-bold text-3xl text-rose-500">
          {data.title}
        </h1>
      </div>
      <div className="post" dangerouslySetInnerHTML={{ __html: post }} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = readdirSync("./data/projectsData").map((file) => {
    const [name, extension] = file.split(".");
    return { params: { slug: name } };
  });

  return {
    paths: files,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const { content, data } = matter.read(
    `./data/projectsData/${ctx.params.slug}.md`
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

export default ProjectsDetail;
