import { GetStaticProps, NextPage } from 'next';

import { Post } from '../../../model/interface';

import Layout from '../../../components/Layout';
import UpdatedText from '../../../components/UpdateText';
import Content from '../../../components/detail/Content';
import { blog } from '../../../module/Blog';
import PageTitle from '../../../components/PageTitle';

const JavascriptPage: NextPage<{ jsContents: Post[] }> = ({ jsContents }) => {
  return (
    <Layout category=''>
      <PageTitle title='Basic Javascript' />
      <Content posts={jsContents} pageName='js' />
      <UpdatedText />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const jsContents = blog.parseFileData('javascript');

  return {
    props: {
      jsContents,
    },
  };
};

export default JavascriptPage;
