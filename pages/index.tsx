import type { NextPage } from "next";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout head="My Blogs">
      <div className="w-full text-white">hello world</div>
    </Layout>
  );
};

export default Home;
