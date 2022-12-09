import { GetStaticProps, NextPage } from 'next';

import { Post } from '../../../model/interface';

import Layout from '../../../components/Layout/Layout';
import UpdatedText from '../../../components/UpdateText';

import { blog } from '../../../module/Blog';
import PageTitle from '../../../components/PageTitle';
import ListContent from '../../../components/detail/ListContent';

const JavascriptPage: NextPage<{ jsContents: Post[] }> = ({ jsContents }) => {
  return (
    <Layout category=''>
      <PageTitle title='Basic Javascript' />
      <ListContent posts={jsContents} pageName='js' />
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
