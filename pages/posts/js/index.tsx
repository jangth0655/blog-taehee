import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { GetStaticProps, NextPage } from "next";
import Layout from "../../../components/Layout";
import { Post } from "../../shared/shared";

const JavascriptPage: NextPage<{ allJsFiles: Post[] }> = ({ allJsFiles }) => {
  return (
    <Layout>
      <div className="w-full text-white">
        {allJsFiles.map((file, i) => (
          <div key={i} className="mb-4">
            <span>{file.title}</span>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allJsFiles = readdirSync("./data/javascript").map((file) => {
    const content = readFileSync(`./data/javascript/${file}`, "utf-8");
    return matter(content).data;
  });

  return {
    props: {
      allJsFiles,
    },
  };
};

export default JavascriptPage;
