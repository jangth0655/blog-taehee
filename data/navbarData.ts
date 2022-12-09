import { NavTitle, PAGE } from '../model/types';

export const navbars: NavTitle[] = [
  { name: 'Home', id: 'home', path: PAGE.HOME },
  {
    name: 'Javascript',
    id: 'js',
    path: PAGE.JS,
    subTitle: '기본적인 자바스크립트 개념 및 문법',
  },
  {
    name: 'Typescript',
    id: 'typescript',
    path: PAGE.TS,
    subTitle: '기본적이 타입스크립트 문법',
  },
  {
    name: 'React',
    id: 'react',
    path: PAGE.REACT,
    subTitle: '기본적인 리액트 개념과 관련 라이브러리 및 기술',
  },
  {
    name: 'Error-handling',
    id: 'error-handling',
    path: PAGE.ERRORS,
    subTitle: '개발 중 에러 발생과 해결',
  },
  {
    name: 'DevStory',
    id: 'dev-story',
    path: PAGE.DIARY,
    subTitle: '개발·프로젝트 이야기',
  },
];
