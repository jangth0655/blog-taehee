export type NavText =
  | 'Home'
  | 'Javascript'
  | 'Typescript'
  | 'React'
  | 'Error-handling'
  | 'DevStory';

export type DataFileName =
  | 'home'
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'error-handling'
  | 'dev-story';

export type NavId =
  | 'home'
  | 'js'
  | 'typescript'
  | 'react'
  | 'error-handling'
  | 'dev-story';

export type NavTitle = {
  name: NavText;
  id: NavId;
  path?: PAGE;
  subTitle?: string;
};

export enum PAGE {
  HOME = '/',
  JS = '/posts/js',
  TS = '/posts/typescript',
  REACT = '/posts/react',
  ERRORS = '/posts/error-handling',
  DIARY = '/posts/dev-story',
}

export type BlogCount = {
  id: NavId;
  count: number;
};
