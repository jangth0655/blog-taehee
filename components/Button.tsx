import { motion } from 'framer-motion';

type ButtonSize = 'big' | 'small';

interface ButtonProps {
  children: React.ReactNode;
  size?: ButtonSize;
}

const Button = ({ children, size }: ButtonProps) => {
  return (
    <motion.button className='flex justify-center w-full h-full items-center rounded-lg bg-teal-400 hover:bg-teal-500 shadow-black shadow-lg transition-all'>
      {children}
    </motion.button>
  );
};
export default Button;
