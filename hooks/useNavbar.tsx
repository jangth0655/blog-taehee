import { useRouter } from 'next/router';
import { useActiveNav } from '../context/toggleNavContext';
import { NavText } from '../model/types';
import { navbar } from '../module/navbarItem';

const useNavbar = () => {
  const router = useRouter();
  const { setToggleNav } = useActiveNav();

  const handlePage = (pageName: NavText) => {
    setToggleNav(false);
    const page = navbar.handleNavbar(pageName);
    router.push(page);
  };

  return {
    navbars: navbar.category,
    handlePage,
    toggleNavbarBoard: setToggleNav,
  };
};
export default useNavbar;
