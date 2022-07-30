import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { GetStaticProps, NextPage } from "next";
import Layout from "../../../components/Layout";

const ReactPage: NextPage = () => {
  return (
    <Layout head="React">
      <h1>React Page</h1>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allReactFiles = readdirSync("./data/react").map((file) => {
    const content = readFileSync(`./data/react/${file}`, "utf-8");
    return matter(content).data;
  });
  console.log(allReactFiles);
  return {
    props: {},
  };
};
export default ReactPage;
