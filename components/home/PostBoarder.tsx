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
    <div className='p-4 rounded-md shadow-md shadow-black'>
      <div className='mt-6 space-y-6'>
        <div className='space-y-2'>
          <span className='text-xl text-teal-500'>{`${title} (${count})`}</span>
          <p className='text-sm text-zinc-300'>{subTitle}</p>
        </div>
        <button
          onClick={() => handlePage(page)}
          className='text-white hover:text-pink-400 transition-all font-bold'
        >
          <span>Read More &rarr;</span>
        </button>
      </div>
    </div>
  );
};
export default PostBoarder;
