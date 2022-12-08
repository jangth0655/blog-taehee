import { NextSeo } from 'next-seo';

interface Props {
  title?: string;
  description?: string;
  isDetail?: boolean;
}

const NextSEO = ({ description, title, isDetail = false }: Props) => {
  const detailTitle = title || '';
  return (
    <NextSeo
      title={isDetail ? detailTitle : title}
      description='javascript, typescript, react와 관련해서 학습한 내용을 기록하며 꾸준히 성장하고 있습니다.'
      openGraph={{
        type: 'website',
        url: 'https://taehee-homepage-2szdgbo3b-jangth0655.vercel.app/',
        locale: 'ko_KR',
        title: "Taehee's 개발 블로그입니다 😄",
        description: description || title,
      }}
    />
  );
};
export default NextSEO;
