import { useState, useEffect } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Tooltip from '@mui/material/Tooltip';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    !isVisible ? null : (
      <Tooltip title="Voltar ao topo">
        <div
          className="lg:fixed lg:bottom-8 lg:right-8 lg:flex lg:items-center lg:cursor-pointer lg:block hidden"
          onClick={scrollToTop}
        >
          <div className="bg-slate-800 rounded-full p-2">
            <KeyboardArrowUpIcon style={{ fontSize: 24, color: '#fff' }} />
          </div>
        </div>
      </Tooltip>
    )
  );
};

export default ScrollToTopButton;
