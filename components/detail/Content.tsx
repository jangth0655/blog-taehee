import Link from 'next/link';
import { Post } from '../../model/interface';
import { NavId } from '../../model/types';

interface Props {
  posts: Post[];
  pageName: NavId;
}

const Content = ({ posts, pageName }: Props) => {
  return (
    <>
      {posts.map((file, i) => (
        <div key={i} className='mb-8'>
          <Link href={`/posts/${pageName}/${file.slug}`}>
            <a className='cursor-pointer hover:text-gray-400 transition-all'>
              <span className='mr-4'>✅</span>
              <span>{file.title}</span>
            </a>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Content;
