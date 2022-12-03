import { InferGetStaticPropsType } from 'next';
import { About } from 'src/components/pages/Home/sections/About';
import { Contact } from 'src/components/pages/Home/sections/Contact';
import { Gallery } from 'src/components/pages/Home/sections/Gallery';
import { Hero } from 'src/components/pages/Home/sections/Hero';
import { Map } from 'src/components/pages/Home/sections/Map';
import { Footer } from 'src/components/triggers/Footer';

export const getStaticProps = async () => {
  const TOKEN = process.env.INSTAGRAM_TOKEN;
  const URL = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&limit=9&access_token&access_token=${TOKEN}`;
  const data = await fetch(URL);
  const res = await data.json();
  return {
    props: { igPhotos: res }
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home = ({ igPhotos }: Props) => {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <Map />
      <Footer igPhotos={igPhotos} />
    </>
  );
};

export default Home;
