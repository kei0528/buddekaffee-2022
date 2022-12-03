import s from './About.module.scss';

import Image from 'next/image';
import { BaseHeadline as Headline } from 'src/components/uis/BaseHeadline';
import { BaseSection as Section } from 'src/components/uis/BaseSection';
import { NavArrow } from 'src/components/uis/NavArrow';
import { BaseParagraph as P } from 'src/components/uis/BaseParagraph';

export const About = () => {
  return (
    <Section outerClass={s.about} innerClass='md:flex md:gap-10 md:items-center lg:gap-20'>
      <>
        <div className='max-w-lg mx-auto md:flex-1 md:h-fit'>
          <Headline label='ÜBER UNS' />
          <P>Herz und Kopf des kleinen Cafés in der Buddestraße in Berlin-Tegel sind die Betreiberin Svenja Fox und der ehemalige Head-Barista bei BUDDE KAFFEE, Keisuke Tanaka, die aus dem Geheimtipp BUDDE KAFFEE längst eine Institution gemacht haben, eine Anlaufstelle für alle, die auf der Suche nach einem extrem gut zubereiteten Kaffee und hausgebackenen veganen Kuchen in gemütlicher und freundlicher Atmosphäre sind.</P>
          <a className='mt-4 flex items-center gap-2 text-base text-sky-blue lg:text-lg'>
            Mehr lesen
            <Image src='/icons/Icon-Arrow_right.svg' alt='' width={6} height={6} />
          </a>
        </div>
        <div className='relative mt-10 md:flex-1 lg:max-w-lg'>
          <div className={s.about_img}>
            <Image src='/images/Image_About1.webp' alt='' height={415} width={600} />
          </div>
          <div className={s.about_img}>
            <Image src='/images/Image_About2.webp' alt='' height={389} width={600} />
          </div>
          <div className={s.about_img}>
            <Image src='/images/Image_About3.webp' alt='' height={750} width={600} />
          </div>
        </div>
        <NavArrow label='Über uns' />
      </>
    </Section>
  );
};
