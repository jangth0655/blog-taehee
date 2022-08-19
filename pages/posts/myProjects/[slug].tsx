import { readdirSync } from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse/lib";
import { unified } from "unified";
import Layout from "../../../components/Layout";
import { Data, Post } from "../../shared/shared";

const ProjectsDetail: NextPage<{ post: Post[]; data: Data }> = ({
  post,
  data,
}) => {
  return (
    <Layout>
      <h1>{data.name}</h1>
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
      date: "he",
      post: value,
      data,
    },
  };
};

export default ProjectsDetail;
