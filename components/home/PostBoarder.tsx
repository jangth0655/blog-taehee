import useNavbar from '../../hooks/useNavbar';
import { NavText } from '../../model/types';

interface Props {
  title: string;
  subTitle?: string;
  page: NavText;
  count?: number;
}

const PostBoarder = ({ title, page, subTitle, count }: Props) => {
  const { handlePage } = useNavbar();
  return (
    <div className='p-4 rounded-md shadow-md dark:shadow-black '>
      <div className='mt-6 space-y-6'>
        <div className='space-y-2'>
          <span className='text-xl dark:text-teal-500 text-teal-600 font-bold'>{`${title} (${
            count || 0
          })`}</span>
          <p className='text-sm dark:text-zinc-300 text-zinc-500'>{subTitle}</p>
        </div>
        <button
          onClick={() => handlePage(page)}
          className='dark:text-white text-zinc-400 hover:dark:text-pink-400 hover:text-pink-600 transition-all font-bold'
        >
          <span>Read More &rarr;</span>
        </button>
      </div>
    </div>
  );
};
export default PostBoarder;
