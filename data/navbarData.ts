import { NavTitle } from '../model/types';
import jsLogo from '../public/assets/home/js.png';
import tsLogo from '../public/assets/home/ts.png';
import reactLogo from '../public/assets/home/react.png';
import errorLogo from '../public/assets/home/error.png';
import skillLogo from '../public/assets/home/skill.png';

export const navbars: NavTitle[] = [
  { name: 'Home', id: 'home', path: '/' },
  {
    name: 'Javascript',
    id: 'js',
    path: '/posts/js',
    url: jsLogo,
  },
  {
    name: 'Typescript',
    id: 'typescript',
    path: '/posts/typescript',
    url: tsLogo,
  },
  {
    name: 'React',
    id: 'react',
    path: '/posts/react',
    url: reactLogo,
  },
  {
    name: 'Error-handling',
    id: 'error-handling',
    path: '/posts/error-handling',
    url: errorLogo,
  },
  {
    id: 'skill',
    name: 'Skills',
    path: '/posts/sill',
    url: skillLogo,
  },
];
