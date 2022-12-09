import { GetStaticProps, NextPage } from 'next';

import ListContent from '../../../components/detail/ListContent';
import Layout from '../../../components/Layout/Layout';
import PageTitle from '../../../components/PageTitle';
import UpdatedText from '../../../components/UpdateText';
import { blog } from '../../../module/Blog';
import { Post } from '../../../model/interface';

const TsPage: NextPage<{ tsContents: Post[] }> = ({ tsContents }) => {
  return (
    <Layout category=''>
      <PageTitle title='Typescript' />
      <ListContent pageName='typescript' posts={tsContents} />
      <UpdatedText />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const tsContents = blog.parseFileData('typescript');

  return {
    props: {
      tsContents,
    },
  };
};
export default TsPage;
