import s from './About.module.scss';

// Components
import Image from 'next/image';
import { BaseHeadline as Headline } from 'src/components/uis/BaseHeadline';
import { BaseSection as Section } from 'src/components/uis/BaseSection';
import { NavArrow } from 'src/components/uis/NavArrow';
import { BaseParagraph as P } from 'src/components/uis/BaseParagraph';
import { useElementOnVisible } from 'src/hooks/useElementOnVisible';
import { useRef } from 'react';
import { useTiltEffect } from 'src/hooks/useTiltEffect';

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  useElementOnVisible({
    ref: sectionRef,
    callback: elm => {
      elm.dataset.isVisible = 'true';
    }
  });
  useTiltEffect({ ref: imgRef });

  return (
    <Section outerClass={s.about} innerClass='md:flex md:gap-10 md:items-center py-20 lg:gap-20 lg:py-32' id='about-us' ref={sectionRef}>
      <>
        <div className='mx-auto relative md:flex-1 md:h-fit'>
          <Headline label='ÜBER UNS' className={s.headline} />
          <div className={s.about_contents}>
            <P>Herz und Kopf des kleinen Cafés in der Buddestraße in Berlin-Tegel sind die Betreiberin Svenja Fox und der ehemalige Head-Barista bei BUDDE KAFFEE, Keisuke Tanaka, die aus dem Geheimtipp BUDDE KAFFEE längst eine Institution gemacht haben, eine Anlaufstelle für alle, die auf der Suche nach einem extrem gut zubereiteten Kaffee und hausgebackenen veganen Kuchen in gemütlicher und freundlicher Atmosphäre sind.</P>
            <a className='mt-4 flex items-center gap-2 text-base text-sky-blue lg:text-lg'>
              Mehr lesen
              <Image src='/icons/Icon-Arrow_right.svg' alt='' width={6} height={6} />
            </a>
          </div>
        </div>
        <div className={`relative mt-10 md:flex-1 z-10  ${s.img_container}`}>
          <div className={s.about_img} ref={imgRef}>
            <Image className='w-full object-cover ' src='/images/Image_About2.webp' alt='' height={389} width={600} />
          </div>
        </div>

        <NavArrow label='Über uns' labelBgColor='#FCFAF6' />
      </>
    </Section>
  );
};
