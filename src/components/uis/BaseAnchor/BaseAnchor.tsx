import { ReactElement } from 'react';

type Props = {
  children: ReactElement | string;
  href: string;
  className?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
};

export const BaseAnchor = ({ children, href, className = '', target = '_self' }: Props) => {
  return (
    <a className={`text-sky-blue italic hover:underline ${className}`} href={href} target={target} rel={target === '_blank' ? 'noopener' : ''}>
      {children}
    </a>
  );
};
