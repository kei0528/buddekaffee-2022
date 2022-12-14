import { useEffect, useState } from 'react';

export const useHeaderState = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newsIsOpen, setNewsIsOpen] = useState(false);

  // Toggler for Mobile Menu
  const toggleMenu = () => {
    setIsOpen(state => !state);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Toggler for News Modal
  const toggleNewsIsOpen = () => {
    setNewsIsOpen(state => !state);
    if (window.sessionStorage.getItem('budde-news-rendered') === null) {
      window.sessionStorage.setItem('budde-news-rendered', 'true');
    }
  };

  // Show news ones after rendering page
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.sessionStorage.getItem('budde-news-rendered') === null) {
        setNewsIsOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Disable scrolling while menu is visible
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return { isOpen, toggleMenu, newsIsOpen, toggleNewsIsOpen, closeMenu };
};
