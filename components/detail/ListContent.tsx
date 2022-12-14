import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';

import { Post } from '../../model/interface';
import { NavId } from '../../model/types';
import NextSEO from '../NextSEO';
import Pagination, { offset } from './Pagination';

interface Props {
  posts: Post[];
  pageName: NavId;
}

const ListContent = ({ posts, pageName }: Props) => {
  const [index, setIndex] = useState(0);
  const topRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const currentPath =
    router.asPath.split('/')[2] === 'js'
      ? 'javascript'
      : router.asPath.split('/')[2];

  const formateDate = (date?: Date) => {
    if (!date) return;
    return new Date(date).toLocaleDateString('ko', {
      year: '2-digit',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div ref={topRef}>
      <NextSEO isDetail title={currentPath} />
      <div className='mb-8'>
        <span className='dark:text-zinc-400 text-zinc-700'>{`Total (${posts?.length})`}</span>
      </div>
      {posts?.slice(index * offset, offset + index * offset).map((file, i) => (
        <div key={i} className='mb-12 group'>
          <div className='flex items-center'>
            <div className='w-4 h-4 rounded-full bg-teal-800 group-hover:bg-teal-600 transition-all  shadow-md shadow-black' />
            <Link href={`/posts/${pageName}/${file.slug}`}>
              <div className='pl-4 cursor-pointer'>
                <span className=' inline-block group-hover:text-teal-600 group-hover:dark:text-teal-400 font-bold transition-all p-1 pl-0'>
                  {file.title}
                </span>
                <div className='flex flex-col space-y-1 text-xs dark:text-gray-400 text-gray-600'>
                  {file.createdAt && (
                    <span>Created : {formateDate(file.createdAt)}</span>
                  )}
                  {file.updatedAt && (
                    <span>Updated : {formateDate(file.updatedAt)}</span>
                  )}
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
      <Pagination
        totalPostLength={posts?.length}
        setIndex={setIndex}
        index={index}
        topRef={topRef}
      />
    </div>
  );
};

export default ListContent;
