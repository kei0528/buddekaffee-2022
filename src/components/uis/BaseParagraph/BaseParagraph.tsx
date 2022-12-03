import { ReactElement } from 'react';

export const BaseParagraph = ({ children, className }: { children: string | ReactElement; className?: string }) => {
  return <p className={`text-lg lg:text-[21px] lg:leading-9 ${className ?? ''}`}>{children}</p>;
};
