import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import { useWindowSize } from '../../../hooks/useWindowSIze';
import NavbarBoard from './NavbarBoard';
import Logo from './Logo';
import useNavbar from '../../../hooks/useNavbar';
import ThemeSwitch from '../../home/ThemeSwitch';

const Navbar = () => {
  const { pathname } = useRouter();
  const { smallWindowSize } = useWindowSize();
  const { navbars, handlePage } = useNavbar();
  const currentPage = pathname.split('/')[2] || 'home';

  return (
    <nav className='flex items-center justify-between p-4 dark:bg-zinc-900 bg-zinc-100'>
      <Logo />
      <div className='flex items-center'>
        <ThemeSwitch />
        {smallWindowSize ? (
          <NavbarBoard />
        ) : (
          <div className='space-x-2 flex items-center'>
            {navbars.map((navbar) => (
              <div key={navbar.id}>
                <div
                  onClick={() => handlePage(navbar.name)}
                  className='relative px-1 dark:text-zinc-300 text-zinc-500 hover:dark:text-white hover:text-zinc-900 font-bold transition-all cursor-pointer lg:px-4 '
                >
                  <span className='text-sm'>{navbar.name}</span>
                  {currentPage === navbar.id && (
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
      </div>
    </nav>
  );
};
export default Navbar;
