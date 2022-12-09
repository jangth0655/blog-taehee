import { GetStaticProps, NextPage } from 'next';

import { Post } from '../../../model/interface';

import Layout from '../../../components/Layout/Layout';
import UpdatedText from '../../../components/UpdateText';

import { blog } from '../../../module/Blog';
import PageTitle from '../../../components/PageTitle';
import ListContent from '../../../components/detail/ListContent';

const DiaryPage: NextPage<{ diaryContents: Post[] }> = ({ diaryContents }) => {
  return (
    <Layout category=''>
      <PageTitle title='개발일기' />
      <ListContent posts={diaryContents} pageName='dev-story' />
      <UpdatedText />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const diaryContents = blog.parseFileData('dev-story');

  return {
    props: {
      diaryContents,
    },
  };
};

export default DiaryPage;
