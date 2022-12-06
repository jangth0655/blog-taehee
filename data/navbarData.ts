import { NavTitle } from '../model/types';

export const navbars: NavTitle[] = [
  { name: 'Home', id: 'home', path: '/' },
  {
    name: 'Javascript',
    id: 'js',
    path: '/posts/js',
    subTitle: '기본적인 자바스크립트 개념 및 문법',
  },
  {
    name: 'Typescript',
    id: 'typescript',
    path: '/posts/typescript',
    subTitle: '기본적이 타입스크립트 문법',
  },
  {
    name: 'React',
    id: 'react',
    path: '/posts/react',
    subTitle: '기본적인 리액트 개념과 관련 라이브러리 및 기술',
  },
  {
    name: 'Error-handling',
    id: 'error-handling',
    path: '/posts/error-handling',
    subTitle: '개발 중 에러 발생과 해결',
  },
];
