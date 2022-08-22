import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { GetStaticProps, NextPage } from "next";
import Layout from "../../../components/Layout";
import PageTitle from "../../../components/PageTitle";
import { Post } from "../../shared/shared";

const NextJsPage: NextPage<{ allNextJsFiles: Post[] }> = ({
  allNextJsFiles,
}) => {
  return (
    <Layout head="NextJS" category="nextjs">
      <section className="">
        <PageTitle title="Basic NextJS" />
        <div>
          {allNextJsFiles?.map((file, i) => (
            <div key={i}>
              <span>{file.title}</span>
            </div>
          ))}
        </div>
        <div className="mt-20">
          <h1 className="text-gray-200 text-lg">업데이트 중 🔥</h1>
        </div>
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
