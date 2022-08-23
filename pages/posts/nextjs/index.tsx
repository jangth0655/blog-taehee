import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Layout from "../../../components/Layout";
import PageTitle from "../../../components/PageTitle";
import UpdatedText from "../../../components/UpdateText";
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
            <div key={i} className="mb-8">
              <Link href={`/posts/nextjs/${file.slug}`}>
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
  const allNextJsFiles = readdirSync("./data/nextjs").map((file) => {
    const content = readFileSync(`./data/nextjs/${file}`, "utf-8");
    const [slug, _] = file.split(".");
    return { ...matter(content).data, slug };
  });

  return {
    props: {
      allNextJsFiles,
    },
  };
};

export default NextJsPage;
