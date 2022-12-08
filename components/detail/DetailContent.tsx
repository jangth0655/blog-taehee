interface Props {
  post: string;
}

const DetailContent = ({ post }: Props) => {
  return (
    <div className='max-w-2xl m-auto text-zinc-300'>
      <div className='post' dangerouslySetInnerHTML={{ __html: post }} />
    </div>
  );
};
export default DetailContent;
