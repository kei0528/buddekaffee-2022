import { useState } from 'react';

export const useHeaderState = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newsIsOpen, setNewsIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(state => !state);
  };

  const toggleNewsIsOpen = () => {
    setNewsIsOpen(state => !state);
  };

  return { isOpen, toggleMenu, newsIsOpen, toggleNewsIsOpen };
};
