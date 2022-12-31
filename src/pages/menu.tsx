import { InferGetStaticPropsType } from 'next';
import { url } from 'src/utils/url';

import { Footer } from 'src/components/triggers/Footer';
import { BaseHeadline as Headline } from 'src/components/uis/BaseHeadline';
import { BaseSection as Section } from 'src/components/uis/BaseSection';
import { MenuType } from 'src/types/menu.type';

export const getStaticProps = async () => {
  /* Instagram */
  const TOKEN = process.env.INSTAGRAM_TOKEN;
  const URL = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&limit=9&access_token&access_token=${TOKEN}`;
  const igData = await fetch(URL);
  const igRes = await igData.json();

  /* Menu */
  const menuData = await fetch(url.baseUrl + '/api/menu');
  const menuRes = await menuData.json();
  return {
    props: { igPhotos: igRes, menu: menuRes as MenuType }
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Menu = ({ igPhotos, menu }: Props) => {
  return (
    <>
      <Section>
        <Headline className='mb-8 sm:mb-12 lg:mb-20 2xl:mb-20' label='Menü' />
        <div className='grid gap-8 md:grid-cols-2 lg:gap-20'>
          {menu.map(menuObj => (
            <div className='bg-lighter-yellow rounded-lg px-5 py-8 shadow-lg' key={menuObj.title}>
              <h3 className='text-2xl font-bold border-b-2 mb-6 border-text-black'>{menuObj.title}</h3>
              <ul className='flex flex-col gap-3'>
                {menuObj.items.map(item => (
                  <li className='flex justify-between gap-8' key={item.name}>
                    <h4 className='text-lg'>{item.name}</h4>
                    <span className='text-lg'>{item.price.toFixed(1)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      <Footer igPhotos={igPhotos} />
    </>
  );
};

export default Menu;
