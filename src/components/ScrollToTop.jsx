import { useEffect } from 'react';
import { useLocation } from 'react-router';

function ScrollToTop() {
  const { pathname, key } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname, key]); // J'ai ajouté 'key' pour détecter les navigations sur la même page

  return null;
}

export default ScrollToTop;
