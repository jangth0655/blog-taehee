import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../public/logo/logo.png';

const Logo = () => {
  return (
    <div className='flex items-center space-x-4'>
      <Link href={`/`}>
        <a className='relative w-10 h-10'>
          <Image
            src={logo}
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            alt=''
            property=''
          />
        </a>
      </Link>
      <Link href={`/`}>
        <a>
          <span>TaeHee</span>
        </a>
      </Link>
    </div>
  );
};
export default Logo;
