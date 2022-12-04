import Image from 'next/image';
import Link from 'next/link';

import { AiFillGithub } from 'react-icons/ai';

import avatar from '../../public/assets/avatar/avatar.jpeg';

const Header = () => {
  return (
    <div className='mt-10'>
      <div className='flex flex-col sm:flex-row items-center sm:justify-between '>
        <div>
          <h1 className='text-4xl font-bold mb-5'>😄 Hi, I am JangTaeHee</h1>
          <h5 className='italic text-teal-300'>✨ FrontEnd Engineer</h5>
          <p className='text-zinc-400 text-sm sm:text-base'>
            성실하고 꾸준히 학습하며 블로그를 업데이트 하고 발전시켜나가고
            있습니다.
          </p>
        </div>
        <div className='flex sm:flex-col items-center'>
          <div className='relative w-24 h-24 rounded-full shadow-md shadow-black mt-6 sm:mt-0'>
            <Image className='rounded-full' layout='fill' alt='' src={avatar} />
          </div>
          <div className='ml-3 sm:mt-3 sm:ml-0 flex flex-col sm:flex-row items-center'>
            <Link href='https://github.com/jangth0655'>
              <div className='cursor-pointer hover:scale-110 transition-all'>
                <AiFillGithub size={24} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
