import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { GetStaticProps, NextPage } from "next";
import Layout from "../../../components/Layout";
import { Post } from "../../shared/shared";

const NextJsPage: NextPage<{ allNextJsFiles: Post[] }> = ({
  allNextJsFiles,
}) => {
  return (
    <Layout head="NextJS">
      <section className="">
        {allNextJsFiles?.map((file, i) => (
          <div key={i}>
            <span>{file.title}</span>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allNextJsFiles = readdirSync("./data/nextjs").map((file) => {
    const content = readFileSync(`./data/nextjs/${file}`, "utf-8");
    return matter(content).data;
  });

  return {
    props: {
      allNextJsFiles,
    },
  };
};

export default NextJsPage;
