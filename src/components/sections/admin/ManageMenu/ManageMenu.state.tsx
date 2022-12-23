import { useState } from 'react';

export const useManageMenuState = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(state => !state);
  const close = () => setIsOpen(false);

  const [onAdd, setOnAdd] = useState(false);
  const toggleAdd = () => setOnAdd(state => !state);

  return { toggleOpen, isOpen, close, onAdd, toggleAdd };
};
