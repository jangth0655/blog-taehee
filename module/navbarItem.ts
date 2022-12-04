import { NavText, NavTitle, PAGE } from '../model/types';

const navTitle: NavTitle[] = [
  { name: 'Home', id: 'home', path: '/' },
  { name: 'Javascript', id: 'js', path: '/posts/js' },
  { name: 'Typescript', id: 'typescript', path: '/posts/typescript' },
  { name: 'React', id: 'react', path: '/posts/react' },
  {
    name: 'Error-handling',
    id: 'error-handling',
    path: '/posts/error-handling',
  },
  {
    id: 'skill',
    name: 'Skills',
    path: '',
  },
];

class NavbarItem {
  constructor(private data: NavTitle[]) {}
  get category() {
    return [...this.data];
  }

  handleNavbar = (pageName: NavText) => {
    switch (pageName) {
      case 'Home':
        return PAGE.HOME;
      case 'Javascript':
        return PAGE.JS;
      case 'Typescript':
        return PAGE.TS;
      case 'React':
        return PAGE.REACT;
      case 'Error-handling':
        return PAGE.ERRORS;
      case 'Skills':
        return '/';
      default:
        return '/';
    }
  };
}

export const navbar = new NavbarItem(navTitle);
