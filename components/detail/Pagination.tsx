import {
  Dispatch,
  RefObject,
  SetStateAction,
  useCallback,
  useEffect,
} from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import cls from '../../module/cls';

interface Props {
  totalPostLength: number;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  topRef?: RefObject<HTMLDivElement>;
}

export const offset = 15;
const Pagination = ({ totalPostLength, index, setIndex, topRef }: Props) => {
  const MAX_PAGE = Math.ceil(totalPostLength / offset);

  const initialPage = index === 0;
  const lastPage = index + 1 === MAX_PAGE;

  const handlePreviewIndex = useCallback(() => {
    index === 0 ? index : setIndex((prev) => prev - 1);
  }, [index, setIndex]);

  const handleNextIndex = useCallback(() => {
    index === MAX_PAGE - 1 ? MAX_PAGE : setIndex((prev) => prev + 1);
  }, [index, setIndex, MAX_PAGE]);

  useEffect(() => {
    topRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [handleNextIndex, handlePreviewIndex, topRef]);

  return (
    <div className='flex items-center space-x-8 justify-center mt-10 text-zinc-300'>
      <button
        className={cls(
          'cursor-pointer transition-all p-1',
          initialPage ? 'text-zinc-500' : 'text-zinc-300 hover:text-pink-400 '
        )}
        onClick={handlePreviewIndex}
      >
        <MdKeyboardArrowLeft size={30} />
      </button>
      <div className='space-x-2'>
        <span>{index + 1}</span>
        <span>of</span>
        <span>{MAX_PAGE}</span>
      </div>
      <button
        className={cls(
          'cursor-pointer transition-all p-1',
          lastPage ? 'text-zinc-500' : 'text-zinc-300 hover:text-pink-400'
        )}
        onClick={handleNextIndex}
      >
        <MdKeyboardArrowRight size={30} />
      </button>
    </div>
  );
};
export default Pagination;
