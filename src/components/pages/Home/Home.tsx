import { Footer } from 'src/components/triggers/Footer';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Gallery } from './sections/Gallery';
import { Hero } from './sections/Hero';
import { Map } from './sections/Map';

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <Map />
      <Footer />
    </>
  );
};
