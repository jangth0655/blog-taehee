import { GetStaticProps, NextPage } from 'next';

import Content from '../../../components/detail/Content';
import Layout from '../../../components/Layout';
import PageTitle from '../../../components/PageTitle';
import UpdatedText from '../../../components/UpdateText';
import { blog } from '../../../libs/Blog';
import { Post } from '../../../model/interface';

const TsPage: NextPage<{ tsContents: Post[] }> = ({ tsContents }) => {
  return (
    <Layout head='Typescript' category=''>
      <PageTitle title='Typescript' />
      <Content pageName='typescript' posts={tsContents} />
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
