import { InferGetStaticPropsType } from 'next';
import { AboutCake } from 'src/components/sections/about/AboutCake';
import { AboutCoffee } from 'src/components/sections/about/AboutCoffee';
import { FirstView } from 'src/components/sections/about/FirstView';
import { Contact } from 'src/components/sections/home/Contact';
import { Map } from 'src/components/sections/home/Map';
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

const About = ({ igPhotos }: Props) => {
  return (
    <>
      <FirstView />
      <AboutCoffee />
      <AboutCake />
      <Contact />
      <Map />
      <Footer igPhotos={igPhotos} />
    </>
  );
};

export default About;
