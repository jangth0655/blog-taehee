import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Layout from "../../../components/Layout";
import PageTitle from "../../../components/PageTitle";
import { Post } from "../../shared/shared";

const ReactPage: NextPage<{ allReactFiles: Post[] }> = ({ allReactFiles }) => {
  return (
    <Layout head="Basic React" category="">
      <section>
        <PageTitle title="Basic React" />
        <div className="w-full text-white ">
          {allReactFiles.map((file, i) => (
            <div key={i} className="mb-8">
              <Link href={`/posts/react/${file.slug}`}>
                <a className="cursor-pointer hover:text-gray-400 transition-all">
                  <span className="mr-4">✅</span>
                  <span>{file.title}</span>
                </a>
              </Link>
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
  const allReactFiles = readdirSync("./data/react").map((file) => {
    const content = readFileSync(`./data/react/${file}`, "utf-8");
    const [slug, _] = file.split(".");
    return { ...matter(content).data, slug };
  });

  return {
    props: {
      allReactFiles,
    },
  };
};
export default ReactPage;
