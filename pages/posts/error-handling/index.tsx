import { GetStaticProps, NextPage } from 'next';

import ListContent from '../../../components/detail/ListContent';
import Layout from '../../../components/Layout/Layout';
import PageTitle from '../../../components/PageTitle';
import UpdatedText from '../../../components/UpdateText';
import { blog } from '../../../module/Blog';
import { Post } from '../../../model/interface';

const ErrorHandlingPage: NextPage<{ errorHandlingContents: Post[] }> = ({
  errorHandlingContents,
}) => {
  return (
    <Layout category=''>
      <PageTitle title='Error Handing' />
      <ListContent pageName='error-handling' posts={errorHandlingContents} />
      <UpdatedText />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const errorHandlingContents = blog.parseFileData('error-handling');

  return {
    props: {
      errorHandlingContents,
    },
  };
};

export default ErrorHandlingPage;
