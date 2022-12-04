import Image, { StaticImageData } from 'next/image';
import useNavbar from '../../hooks/useNavbar';
import { NavText } from '../../model/types';

interface Props {
  title: string;
  url?: StaticImageData;
  page: NavText;
}
const PostBoarder = ({ title, url, page }: Props) => {
  const { handlePage } = useNavbar();
  return (
    <div className='p-4 w-64 rounded-md shadow-md shadow-black hover:-translate-y-1 transition-all'>
      <div className='relative w-full  h-52 rounded-lg'>
        <Image className='rounded-lg' src={url || ''} layout='fill' alt='' />
      </div>
      <div className='mt-6 flex items-center justify-between'>
        <button
          onClick={() => handlePage(page)}
          className='px-2 bg-teal-600 hover:bg-teal-400  rounded-xl'
        >
          <span>{`About ${title}`}</span>
        </button>
      </div>
    </div>
  );
};
export default PostBoarder;
