import { StaticImageData } from 'next/image';

export type NavText =
  | 'Home'
  | 'Javascript'
  | 'Typescript'
  | 'React'
  | 'Error-handling'
  | 'Skills';

export type DataFileName =
  | 'home'
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'error-handling'
  | 'skill';

export type NavId =
  | 'home'
  | 'js'
  | 'typescript'
  | 'react'
  | 'error-handling'
  | 'skill';

export type NavTitle = {
  name: NavText;
  id: NavId;
  path?: string;
  url?: StaticImageData;
};

export enum PAGE {
  HOME = '/',
  JS = '/posts/js',
  TS = '/posts/typescript',
  REACT = '/posts/react',
  ERRORS = '/posts/error-handling',
  SKILL = '/posts/skill',
}
