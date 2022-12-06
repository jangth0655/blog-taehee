export type NavText =
  | 'Home'
  | 'Javascript'
  | 'Typescript'
  | 'React'
  | 'Error-handling';

export type DataFileName =
  | 'home'
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'error-handling';

export type NavId = 'home' | 'js' | 'typescript' | 'react' | 'error-handling';

export type NavTitle = {
  name: NavText;
  id: NavId;
  path?: string;
  subTitle?: string;
};

export enum PAGE {
  HOME = '/',
  JS = '/posts/js',
  TS = '/posts/typescript',
  REACT = '/posts/react',
  ERRORS = '/posts/error-handling',
}
