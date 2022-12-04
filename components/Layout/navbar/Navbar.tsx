import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import { useWindowSize } from '../../../hooks/useWindowSIze';
import NavbarBoard from './NavbarBoard';
import Logo from './Logo';
import useNavbar from '../../../hooks/useNavbar';

const Navbar = () => {
  const { smallWindowSize } = useWindowSize();
  const { navbars, handlePage, currentPage } = useNavbar();

  return (
    <nav className='flex items-center justify-between p-4 bg-zinc-900 '>
      <Logo />
      {smallWindowSize ? (
        <NavbarBoard />
      ) : (
        <div className='space-x-2 flex items-center'>
          {navbars.map((title) => (
            <div key={title.id}>
              <div className='relative px-1 text-zinc-300 hover:text-white transition-all cursor-pointer lg:px-4'>
                <span
                  onClick={() => handlePage(title.name)}
                  className='text-sm'
                >
                  {title.name}
                </span>
                {currentPage === title.id && (
                  <motion.span
                    className='w-1 h-1 rounded-full bg-rose-500 absolute right-0 m-auto -bottom-1 left-0 '
                    layoutId='circle'
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};
export default Navbar;
