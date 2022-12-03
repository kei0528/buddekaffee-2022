import { ReactElement } from 'react';

export const BaseSection = ({ children, innerClass, outerClass }: { children: ReactElement; innerClass?: string; outerClass?: string }) => {
  return (
    <section className={`px-5 py-10 sm:px-12 sm:py-12 md:py-14 lg:p-20 relative ${outerClass ?? ''}`}>
      <div className={`max-w-max-section mx-auto ${innerClass ?? ''}`}>{children}</div>
    </section>
  );
};
