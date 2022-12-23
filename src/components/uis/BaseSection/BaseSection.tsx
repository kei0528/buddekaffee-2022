import { forwardRef, ReactElement } from 'react';

type Props = { children: ReactElement | ReactElement[]; innerClass?: string; outerClass?: string; id?: string };
type Ref = HTMLElement;

export const BaseSection = forwardRef<Ref, Props>(({ children, innerClass, outerClass, id }, ref) => {
  return (
    <section className={`px-5 py-10 sm:px-12 sm:py-12 md:py-14 lg:p-20 relative ${outerClass ?? ''}`} id={id} ref={ref}>
      <div className={`max-w-max-section mx-auto ${innerClass ?? ''}`}>{children}</div>
    </section>
  );
});

BaseSection.displayName = 'BaseSection';
