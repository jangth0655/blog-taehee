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
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div ref={topRef}>
      <NextSEO isDetail title={currentPath} />
      <div className='mb-8'>
        <span className='text-zinc-400'>{`Total (${posts?.length})`}</span>
      </div>
      {posts?.slice(index * offset, offset + index * offset).map((file, i) => (
        <div key={i} className='mb-8'>
          <div className='flex'>
            <span>·</span>
            <div className='pl-4'>
              <Link href={`/posts/${pageName}/${file.slug}`}>
                <span className='cursor-pointer inline-block hover:text-teal-400 transition-all p-1 pl-0'>
                  {file.title}
                </span>
              </Link>
              <div className='flex flex-col space-y-1 text-xs text-gray-400'>
                {file.createdAt && (
                  <span>Created : {formateDate(file.createdAt)}</span>
                )}
                {file.updatedAt && (
                  <span>Updated : {formateDate(file.updatedAt)}</span>
                )}
              </div>
            </div>
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
