import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { Post } from '../../model/interface';
import { NavId } from '../../model/types';
import Pagination from './Pagination';

interface Props {
  posts: Post[];
  pageName: NavId;
}

const Content = ({ posts, pageName }: Props) => {
  const [index, setIndex] = useState(0);
  const offset = 15;

  return (
    <>
      <div className='mb-8'>
        <span className='text-zinc-400'>{`Total (${posts.length})`}</span>
      </div>
      {posts.slice(index * offset, offset + index * offset).map((file, i) => (
        <div key={i} className='mb-8'>
          <Link href={`/posts/${pageName}/${file.slug}`}>
            <a className='cursor-pointer hover:text-gray-400 transition-all'>
              <span className='mr-4'>·</span>
              <span>{file.title}</span>
            </a>
          </Link>
        </div>
      ))}
      <Pagination
        totalPostLength={posts.length}
        setIndex={setIndex}
        index={index}
      />
    </>
  );
};

export default Content;
