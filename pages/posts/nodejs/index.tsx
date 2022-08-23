import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Layout from "../../../components/Layout";
import PageTitle from "../../../components/PageTitle";
import UpdatedText from "../../../components/UpdateText";
import { Post } from "../../shared/shared";

const NodeJsPage: NextPage<{ allNodeJsFiles: Post[] }> = ({
  allNodeJsFiles,
}) => {
  return (
    <Layout head="Basic NodeJS" category="nodejs">
      <section>
        <PageTitle title="Node JS" />
        <div className="w-full text-white ">
          {allNodeJsFiles.map((file, i) => (
            <div key={i} className="mb-8">
              <Link href={`/posts/nodejs/${file.slug}`}>
                <a className="cursor-pointer hover:text-gray-400 transition-all">
                  <span className="mr-4">✅</span>
                  <span>{file.title}</span>
                </a>
              </Link>
            </div>
          ))}
        </div>
        <UpdatedText />
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allNodeJsFiles = readdirSync("./data/nodejs").map((file) => {
    const content = readFileSync(`./data/nodejs/${file}`, "utf-8");
    const [slug, _] = file.split(".");
    return { ...matter(content).data, slug };
  });

  return {
    props: {
      allNodeJsFiles,
    },
  };
};

export default NodeJsPage;
