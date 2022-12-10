import { HiSun, HiMoon } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const DARK_MODE = 'dark';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const darkTheme = theme === DARK_MODE || resolvedTheme === 'dark';
  const handleTheme = () => {
    setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className='flex sm:w-20 w-14 border-2 dark:border-white border-zinc-700 items-center rounded-xl px-1 py-[1px] mr-4 absolute left-40 dark:text-zinc-200 text-zinc-700 justify-between'>
      <div onClick={handleTheme}>
        {mounted && darkTheme ? (
          <motion.div layoutId='dark'>
            <HiSun />
          </motion.div>
        ) : null}
      </div>
      <div onClick={handleTheme}>
        {mounted && darkTheme ? null : (
          <motion.div layoutId='dark'>
            <HiMoon />
          </motion.div>
        )}
      </div>
    </div>
  );
};
export default ThemeSwitch;
