import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import PageTitle from '../../../components/PageTitle';
import UpdatedText from '../../../components/UpdateText';
import { Post } from '../../../libs/shared/shared';

const JavascriptPage: NextPage<{ allJsFiles: Post[] }> = ({ allJsFiles }) => {
  return (
    <Layout head='JS' category=''>
      <section>
        <PageTitle title='Basic Javascript' />
        <div className='w-full text-white '>
          {allJsFiles.map((file, i) => (
            <div key={i} className='mb-8'>
              <Link href={`/posts/study/${file.slug}`}>
                <a className='cursor-pointer hover:text-gray-400 transition-all'>
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
  const allJsFiles = readdirSync('./data/study').map((file) => {
    const content = readFileSync(`./data/study/${file}`, 'utf-8');
    const [slug, _] = file.split('.');
    return { ...matter(content).data, slug };
  });

  return {
    props: {
      allJsFiles,
    },
  };
};

export default JavascriptPage;
