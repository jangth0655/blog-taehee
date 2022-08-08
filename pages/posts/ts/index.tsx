import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { GetStaticProps, NextPage } from "next";
import Layout from "../../../components/Layout";

const TsPage: NextPage = () => {
  return (
    <Layout head="Typescript" category="">
      <h1>Typescript Page</h1>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allReactFiles = readdirSync("./data/typescript").map((file) => {
    const content = readFileSync(`./data/typescript/${file}`, "utf-8");
    return matter(content).data;
  });
  console.log(allReactFiles);
  return {
    props: {},
  };
};
export default TsPage;
