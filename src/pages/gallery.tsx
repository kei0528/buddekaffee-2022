import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { GalleryImages } from 'src/components/sections/gallery/GalleryImages';
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

const Gallery = ({ igPhotos }: Props) => {
  return (
    <>
      <Head>
        <title>Budde Kaffee | Gallerie</title>
      </Head>
      <GalleryImages />
      <Map />
      <Footer igPhotos={igPhotos} />
    </>
  );
};

export default Gallery;
