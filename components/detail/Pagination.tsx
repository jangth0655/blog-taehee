import { Dispatch, SetStateAction, useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

interface Props {
  totalPostLength: number;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
}

const Pagination = ({ totalPostLength, index, setIndex }: Props) => {
  const offset = 15;
  const MAX_PAGE = Math.ceil(totalPostLength / offset);

  const handlePreviewIndex = () => {
    index === 0 ? index : setIndex((prev) => prev - 1);
  };

  const handleNextIndex = () => {
    index === MAX_PAGE - 1 ? MAX_PAGE : setIndex((prev) => prev + 1);
  };
  return (
    <div className='flex items-center space-x-8 justify-center mt-10 text-zinc-300'>
      <div
        className='cursor-pointer hover:text-pink-400 transition-all p-1'
        onClick={handlePreviewIndex}
      >
        <MdKeyboardArrowLeft size={30} />
      </div>
      <div className='space-x-2'>
        <span>{index + 1}</span>
        <span>of</span>
        <span>{MAX_PAGE}</span>
      </div>
      <div
        className='cursor-pointer hover:text-pink-400 transition-all p-1'
        onClick={handleNextIndex}
      >
        <MdKeyboardArrowRight size={30} />
      </div>
    </div>
  );
};
export default Pagination;
