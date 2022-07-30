import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Layout from "../../../components/Layout";
import { Post } from "../../shared/shared";

const JavascriptPage: NextPage<{ allJsFiles: Post[] }> = ({ allJsFiles }) => {
  return (
    <Layout head="JS">
      <div className="w-full text-white">
        {allJsFiles.map((file, i) => (
          <div key={i} className="mb-4">
            <Link href={`/posts/js/${file.slug}`}>
              <a>
                <span>{file.title}</span>
              </a>
            </Link>
          </div>
        ))}
      </div>
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
