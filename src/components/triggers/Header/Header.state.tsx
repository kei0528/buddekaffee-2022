import { useEffect, useState } from 'react';
import { useNewsData } from 'src/hooks/useNewsData';

export const useHeaderState = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newsIsOpen, setNewsIsOpen] = useState(false);
  const { data, isLoading, error } = useNewsData();

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
    if (isLoading || error) return;
    const newsLastEdit = data.lastEdit;
    const userNewsLastOpened = window.localStorage.getItem('budde-news-last-rendered');
    const currentTime = new Date().getTime();

    if (userNewsLastOpened !== null) {
      // If user already read the latest news and user read the news in last 1 month, stop rendering news
      if (newsLastEdit < Number(userNewsLastOpened) && Number(userNewsLastOpened) > currentTime - 2592000000) {
        return;
      }
    }

    const timer = setTimeout(() => {
      setNewsIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isLoading, error, data]);

  useEffect(() => {
    if (newsIsOpen) {
      window.localStorage.setItem('budde-news-last-rendered', new Date().getTime().toString());
    }
  }, [newsIsOpen]);

  // Disable scrolling while menu is visible
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return { isOpen, toggleMenu, newsIsOpen, toggleNewsIsOpen, closeMenu, data, isLoading, error };
};
