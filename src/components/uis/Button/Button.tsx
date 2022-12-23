import { MouseEventHandler, ReactElement } from 'react';
import s from './Button.module.scss';

export const Button = ({ children, className, onClick }: { children: ReactElement | ReactElement[] | string; className?: string; onClick?: MouseEventHandler<HTMLButtonElement> }) => {
  return (
    <button className={`${s.btn} ${className ?? ''}`} onClick={onClick}>
      {children}
    </button>
  );
};
