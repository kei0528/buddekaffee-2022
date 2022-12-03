import { useState } from 'react';

export const useHeaderState = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(state => !state);
  };

  return { isOpen, toggleMenu };
};
