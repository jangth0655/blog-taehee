import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Layout from "../../../components/Layout";
import PageTitle from "../../../components/PageTitle";
import { Post } from "../../../libs/shared/shared";

const BooksPage: NextPage<{ allNative: Post[] }> = ({ allNative }) => {
  return (
    <Layout head="Books" category="">
      <section>
        <PageTitle title="Books" />
        <div>
          {allNative.map((file, i) => (
            <div key={i} className="mb-8">
              <Link href={`/posts/react-native/${file.slug}`}>
                <a className="cursor-pointer hover:text-gray-300 transition-all">
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
  const allNative = readdirSync("./data/react-native").map((file) => {
    const content = readFileSync(`./data/react-native/${file}`, "utf-8");
    const [slug, _] = file.split(".");
    return { ...matter(content).data, slug };
  });

  return {
    props: {
      allNative,
    },
  };
};

export default BooksPage;