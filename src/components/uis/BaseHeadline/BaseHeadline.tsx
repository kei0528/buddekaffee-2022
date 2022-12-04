import { forwardRef, RefObject } from 'react';

type Props = { className?: string; label: string };
type Ref = HTMLHeadingElement;

export const BaseHeadline = forwardRef<Ref, Props>(({ label, className }, ref) => {
  return (
    <h2 className={`pb-1 mb-6 font-display font-bold text-4xl text-text-black border-b-2 border-text-black lg:text-5xl  2xl:text-6xl 2xl:pb-3 2xl:mb-8 ${className ?? ''}`} ref={ref}>
      {label}
    </h2>
  );
});

BaseHeadline.displayName = 'BaseHeadline';
