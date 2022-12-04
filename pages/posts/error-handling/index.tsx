import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import PageTitle from '../../../components/PageTitle';
import UpdatedText from '../../../components/UpdateText';
import { Post } from '../../../model/interface';

const ErrorHandlingPage: NextPage<{ allErrorHandling: Post[] }> = ({
  allErrorHandling,
}) => {
  return (
    <Layout head='Books' category=''>
      <section>
        <PageTitle title='Error Handing' />
        <div>
          {allErrorHandling.map((file, i) => (
            <div key={i} className='mb-8'>
              <Link href={`/posts/error-handling/${file.slug}`}>
                <a className='cursor-pointer hover:text-gray-300 transition-all'>
                  <span className='mr-4'>✅</span>
                  <span>{file.title}</span>
                </a>
              </Link>
            </div>
          ))}
        </div>
        <UpdatedText />
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allErrorHandling = readdirSync('./data/error-handling').map((file) => {
    const content = readFileSync(`./data/error-handling/${file}`, 'utf-8');
    const [slug, _] = file.split('.');
    return { ...matter(content).data, slug };
  });

  return {
    props: {
      allErrorHandling,
    },
  };
};

export default ErrorHandlingPage;
