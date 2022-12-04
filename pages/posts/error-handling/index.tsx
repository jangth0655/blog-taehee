import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Content from '../../../components/detail/Content';
import Layout from '../../../components/Layout';
import PageTitle from '../../../components/PageTitle';
import UpdatedText from '../../../components/UpdateText';
import { blog } from '../../../libs/Blog';
import { Post } from '../../../model/interface';

const ErrorHandlingPage: NextPage<{ errorHandlingContents: Post[] }> = ({
  errorHandlingContents,
}) => {
  return (
    <Layout head='Books' category=''>
      <PageTitle title='Error Handing' />
      <Content pageName='error-handling' posts={errorHandlingContents} />
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
