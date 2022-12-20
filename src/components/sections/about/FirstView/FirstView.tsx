import s from './FirstView.module.scss';
import Image from 'next/image';
import { useRef } from 'react';
import { BaseHeadline as Headline } from 'src/components/uis/BaseHeadline';
import { BaseParagraph as P } from 'src/components/uis/BaseParagraph';
import { BaseSection as Section } from 'src/components/uis/BaseSection';
import { NavArrow } from 'src/components/uis/NavArrow';
import { useElementOnVisible } from 'src/hooks/useElementOnVisible';

export const FirstView = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useElementOnVisible({
    ref: sectionRef,
    callback: elm => {
      elm.dataset.isVisible = 'true';
    }
  });

  return (
    <Section outerClass={s.fv} innerClass='md:flex md:flex-row-reverse md:gap-14 md:pt-10 md:items-center lg:gap-24 2xl:pt-20' ref={sectionRef}>
      <>
        <Image className={`rounded-md shadow-md object-cover md:w-6/12 ${s.fv__img}`} src='/images/Image_About-fv.webp' alt='' width={842} height={596} />
        <div className='mt-10 md:mt-0 md:flex-1'>
          <Headline className={s.fv__headline} label='Über uns' />
          <P className={s.fv__description}>Herz und Kopf des kleinen Cafés in der Buddestraße in Berlin-Tegel sind die Betreiberin Svenja Fox und der ehemalige Head-Barista bei BUDDE KAFFEE, Keisuke Tanaka, die aus dem Geheimtipp BUDDE KAFFEE längst eine Institution gemacht haben, eine Anlaufstelle für alle, die auf der Suche nach einem extrem gut zubereiteten Kaffee und hausgebackenen veganen Kuchen in gemütlicher und freundlicher Atmosphäre sind.</P>
        </div>
        <NavArrow label='Über uns' position='start' />
      </>
    </Section>
  );
};
