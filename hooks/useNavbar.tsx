import { useRouter } from 'next/router';
import { useActiveNav } from '../context/toggleNavContext';
import { NavText } from '../model/types';
import { navbar } from '../module/navbarItem';

const useNavbar = () => {
  const router = useRouter();
  const { setToggleNav } = useActiveNav();
  const { pathname } = useRouter();
  const currentPage = pathname.split('/')[2] || 'home';

  const handlePage = (pageName: NavText) => {
    setToggleNav(false);
    const page = navbar.handleNavbar(pageName);
    router.push(page);
  };

  return {
    navbars: navbar.category,
    currentPage,
    handlePage,
  };
};
export default useNavbar;
