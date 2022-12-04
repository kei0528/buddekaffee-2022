import { forwardRef, ReactElement } from 'react';

type Props = { children: ReactElement; innerClass?: string; outerClass?: string };
type Ref = HTMLElement;

export const BaseSection = forwardRef<Ref, Props>(({ children, innerClass, outerClass }, ref) => {
  return (
    <section className={`px-5 py-10 sm:px-12 sm:py-12 md:py-14 lg:p-20 relative ${outerClass ?? ''}`} ref={ref}>
      <div className={`max-w-max-section mx-auto ${innerClass ?? ''}`}>{children}</div>
    </section>
  );
});

BaseSection.displayName = 'BaseSection';
