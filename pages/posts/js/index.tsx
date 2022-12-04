import { GetStaticProps, NextPage } from 'next';

import { Post } from '../../../model/interface';

import Layout from '../../../components/Layout';
import PageTitle from '../../../components/PageTitle';
import UpdatedText from '../../../components/UpdateText';
import Content from '../../../components/detail/Content';
import { blog } from '../../../libs/Blog';

const JavascriptPage: NextPage<{ jsContents: Post[] }> = ({ jsContents }) => {
  return (
    <Layout head='JS' category=''>
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
