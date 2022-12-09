import { GetStaticProps, NextPage } from 'next';

import ListContent from '../../../components/detail/ListContent';
import Layout from '../../../components/Layout/Layout';
import PageTitle from '../../../components/PageTitle';
import UpdatedText from '../../../components/UpdateText';
import { blog } from '../../../module/Blog';
import { Post } from '../../../model/interface';

const ReactPage: NextPage<{ reactContents: Post[] }> = ({ reactContents }) => {
  return (
    <Layout category=''>
      <PageTitle title='Basic React' />
      <ListContent posts={reactContents} pageName='react' />
      <UpdatedText />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const reactContents = blog.parseFileData('react');

  return {
    props: {
      reactContents,
    },
  };
};
export default ReactPage;
