import { GetStaticProps, NextPage } from 'next';

import { Post } from '../../../model/interface';

import Layout from '../../../components/Layout/Layout';
import UpdatedText from '../../../components/UpdateText';

import { blog } from '../../../module/Blog';
import PageTitle from '../../../components/PageTitle';
import ListContent from '../../../components/detail/ListContent';

const DiaryPage: NextPage<{ testContent: Post[] }> = ({ testContent }) => {
  return (
    <Layout category=''>
      <PageTitle title='기본 CS지식' />
      <ListContent posts={testContent} pageName='basic-cs' />
      <UpdatedText />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const testContent = blog.parseFileData('basic-cs');

  return {
    props: {
      testContent,
    },
  };
};

export default DiaryPage;
