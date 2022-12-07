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
      title={isDetail ? detailTitle : 'Taehee의 개발 블로그 입니다 :)'}
      description='javascript, typescript, react와 관련해서 학습한 내용을 기록하며 꾸준히 성장하고 있습니다.'
      openGraph={{
        type: 'website',
        url: 'https://taehee-homepage-2szdgbo3b-jangth0655.vercel.app/',
        locale: 'ko_KR',
        title: "Taehee's 개발 블로그입니다 😄",
        description: description || title,
        images: [
          {
            url: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
            width: 800,
            height: 400,
            type: 'image/*',
          },
        ],
      }}
    />
  );
};
export default NextSEO;
