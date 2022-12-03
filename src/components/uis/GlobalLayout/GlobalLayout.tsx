// Fonts
import '@fontsource/dosis/400.css';
import '@fontsource/amatic-sc/400.css';
import '@fontsource/amatic-sc/700.css';
// Types
import { ReactElement } from 'react';

// Components
import { Header } from 'src/components/triggers/Header';

export const GlobalLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Header />
      <main className=' pt-24 md:pt-0'>{children}</main>
    </>
  );
};
