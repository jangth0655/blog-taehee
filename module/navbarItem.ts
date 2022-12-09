import { navbars } from '../data/navbarData';
import { NavText, NavTitle, PAGE } from '../model/types';

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
      case 'DevStory':
        return PAGE.DIARY;
      default:
        return '/';
    }
  };
}

export const navbar = new NavbarItem(navbars);
