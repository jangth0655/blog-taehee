import { AnimatePresence, motion, Variants } from 'framer-motion';
import { AiOutlineMenu } from 'react-icons/ai';

import { useActiveNav } from '../../../context/toggleNavContext';
import useNavbar from '../../../hooks/useNavbar';

const navVariant: Variants = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
  },
  exit: {
    scaleY: 0,
  },
};

const NavbarBoard = () => {
  const { handlePage, navbars } = useNavbar();
  const { toggleNav, setToggleNav } = useActiveNav();

  const handleToggle = () => {
    setToggleNav((prev) => !prev);
  };

  return (
    <div>
      <div className='cursor-pointer'>
        <AiOutlineMenu size={20} onClick={handleToggle} />
      </div>
      <AnimatePresence>
        {toggleNav ? (
          <motion.div
            variants={navVariant}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{
              type: 'linear',
            }}
            className='origin-top absolute w-full top-16 dark:bg-black bg-zinc-300 py-4 left-0 z-50'
          >
            <div className='space-y-6 px-4'>
              {navbars.map((title) => (
                <div
                  key={title.id}
                  className='dark:text-zinc-400 text-zinc-800 cursor-pointer text-sm flex items-center justify-center'
                >
                  <span
                    onClick={() => handlePage(title.name)}
                    className='hover:dark:text-white hover:text-black transition-all inline-block p-1 hover:font-bold'
                  >
                    {title.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};
export default NavbarBoard;
