import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Layout from "../../../components/Layout";
import PageTitle from "../../../components/PageTitle";
import { Post } from "../../shared/shared";

const JavascriptPage: NextPage<{ allJsFiles: Post[] }> = ({ allJsFiles }) => {
  return (
    <Layout head="JS" category="">
      <section className="max-w-4xl m-auto">
        <PageTitle title="Basic Javascript" />
        <div className="w-full text-white ">
          {allJsFiles.map((file, i) => (
            <div key={i} className="mb-8">
              <Link href={`/posts/js/${file.slug}`}>
                <a className="cursor-pointer hover:text-gray-300 transition-all">
                  <span>{file.title}</span>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allJsFiles = readdirSync("./data/javascript").map((file) => {
    const content = readFileSync(`./data/javascript/${file}`, "utf-8");
    const [slug, _] = file.split(".");
    return { ...matter(content).data, slug };
  });

  return {
    props: {
      allJsFiles,
    },
  };
};

export default JavascriptPage;
