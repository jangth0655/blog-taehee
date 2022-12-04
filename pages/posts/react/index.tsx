import { GetStaticProps, NextPage } from 'next';

import Content from '../../../components/detail/Content';
import Layout from '../../../components/Layout';
import PageTitle from '../../../components/PageTitle';
import UpdatedText from '../../../components/UpdateText';
import { blog } from '../../../libs/Blog';
import { Post } from '../../../model/interface';

const ReactPage: NextPage<{ reactContents: Post[] }> = ({ reactContents }) => {
  return (
    <Layout head='Basic React' category=''>
      <PageTitle title='Basic React' />
      <Content posts={reactContents} pageName='react' />
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
