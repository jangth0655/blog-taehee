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
    <div
      className={cls(
        'flex w-20 border-2 items-center rounded-xl px-1 py-[1px] mr-4',
        darkTheme ? 'justify-start' : 'justify-end'
      )}
    >
      <motion.div layout onClick={handleTheme} className='text-white'>
        {darkTheme ? <HiSun /> : <HiMoon />}
      </motion.div>
    </div>
  );
};
export default ThemeSwitch;
