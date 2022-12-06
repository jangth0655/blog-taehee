import { NextSeo } from 'next-seo';

interface Props {
  title?: string;
  description?: string;
}

const NextSEO = ({ description, title }: Props) => {
  return (
    <NextSeo
      title={`Taehee's Blog | ${title || ''}`}
      description='javascript, typescript, react와 관련해서 학습한 내용을 기록하며 꾸준히 성장하고 있습니다.'
      openGraph={{
        type: 'website',
        title: title || "Taehee's 개발 블로그입니다 😄",
        description:
          description ||
          'javascript, typescript, react와 관련해서 학습한 내용을 기록하며 꾸준히 성장하고 있습니다.',
      }}
    />
  );
};
export default NextSEO;
