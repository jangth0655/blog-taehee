import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Layout from "../../../components/Layout";
import PageTitle from "../../../components/PageTitle";
import { Post } from "../../shared/shared";

const TsPage: NextPage<{ allTypescriptFiles: Post[] }> = ({
  allTypescriptFiles,
}) => {
  return (
    <Layout head="Typescript" category="">
      <section>
        <PageTitle title="Typescript" />
        <div className="w-full text-white ">
          {allTypescriptFiles.map((file, i) => (
            <div key={i} className="mb-8">
              <Link href={`/posts/typescript/${file.slug}`}>
                <a className="cursor-pointer hover:text-gray-400 transition-all">
                  <span className="mr-4">✅</span>
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
  const allTypescriptFiles = readdirSync("./data/typescript").map((file) => {
    const content = readFileSync(`./data/typescript/${file}`, "utf-8");
    const [slug, _] = file.split(".");
    return { ...matter(content).data, slug };
  });

  return {
    props: {
      allTypescriptFiles,
    },
  };
};
export default TsPage;
