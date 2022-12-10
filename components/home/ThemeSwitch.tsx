import { HiSun, HiMoon } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { ThemeChanger } from '../../hooks/useTheme';
import cls from '../../module/cls';

const DARK_MODE = 'dark';
const LIGHT_MODE = 'light';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = ThemeChanger();
  const darkTheme = theme === DARK_MODE;
  const handleTheme = () => {
    if (!toggleTheme) return;
    darkTheme ? toggleTheme(LIGHT_MODE) : toggleTheme(DARK_MODE);
  };

  return (
    <div className='flex sm:w-20 w-14 border-2 dark:border-white border-zinc-700 items-center rounded-xl px-1 py-[1px] mr-4 absolute left-40 dark:text-zinc-200 text-zinc-700 justify-between'>
      <div onClick={handleTheme}>
        {darkTheme ? (
          <motion.div layoutId='dark'>
            <HiSun />
          </motion.div>
        ) : null}
      </div>
      <div onClick={handleTheme}>
        {darkTheme ? null : (
          <motion.div layoutId='dark'>
            <HiMoon />
          </motion.div>
        )}
      </div>
    </div>
  );
};
export default ThemeSwitch;
