import Link from 'next/link';
import { ReactElement } from 'react';
import s from './LinkButton.module.scss';

export const LinkButton = ({ children, className, href }: { children: ReactElement | string; className?: string; href: string }) => {
  return (
    <Link className={`${s.btn} ${className ?? ''}`} href={href}>
      {children}
    </Link>
  );
};
