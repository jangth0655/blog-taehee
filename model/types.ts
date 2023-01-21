export type NavText =
  | 'Home'
  | 'Javascript'
  | 'Typescript'
  | 'React'
  | 'Error-handling'
  | 'DevStory'
  | 'Basic CS';

export type DataFileName =
  | 'home'
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'error-handling'
  | 'dev-story'
  | 'basic-cs';

export type NavId =
  | 'home'
  | 'js'
  | 'typescript'
  | 'react'
  | 'error-handling'
  | 'dev-story'
  | 'basic-cs';

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
  CS = '/posts/basic-cs',
}

export type BlogCount = {
  id: NavId;
  count: number;
};
