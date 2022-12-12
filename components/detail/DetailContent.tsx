interface Props {
  post: string;
}

const DetailContent = ({ post }: Props) => {
  return (
    <div className='max-w-3xl m-auto dark:text-zinc-300 text-zinc-700'>
      <div className='post' dangerouslySetInnerHTML={{ __html: post }} />
    </div>
  );
};
export default DetailContent;
