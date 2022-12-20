import s from './AboutCake.module.scss';
import Image from 'next/image';
import { BaseHeadline as Headline } from 'src/components/uis/BaseHeadline';
import { BaseParagraph as P } from 'src/components/uis/BaseParagraph';
import { BaseSection as Section } from 'src/components/uis/BaseSection';
import { NavArrow } from 'src/components/uis/NavArrow';
import { BaseAnchor as A } from 'src/components/uis/BaseAnchor';
import { useRef } from 'react';
import { useElementOnVisible } from 'src/hooks/useElementOnVisible';

export const AboutCake = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useElementOnVisible({
    ref: sectionRef,
    callback: elm => {
      elm.dataset.isVisible = 'true';
    }
  });

  return (
    <Section outerClass={`xl:pb-28 ${s.about_cake}`} innerClass='md:flex md:gap-10 lg:gap-20 lg:items-center' ref={sectionRef}>
      <>
        <div className='lg:w-1/2'>
          <Headline className={s.about_cake__headline} label='Unser Kuchen' />
          <P className={s.about_cake__description}>
            <>
              Die Besonderheit des Cafés ist eine täglich wechselnde Auswahl selbstgebackener, veganer Kuchen von{' '}
              <A href='https://www.mansfieldpark.de/' target='_blank'>
                Mansfield Park
              </A>
              , eine Kuchenmanufaktur aus Berlin, die sich ausschließlich auf die Herstellung veganer Kuchen, sowie Hochzeits- und Geburtstagstorten spezialisiert hat.Frisch gebackene Croissants und hausgemachte Vollkornstullen bieten im BUDDE eine herzhafte Alternative zum süßen Kuchenprogramm.
            </>
          </P>
        </div>
        <Image className={`max-w-md w-full mx-auto my-10 object-cover rounded-md md:m-0 xl:min-h-[420px] lg:flex-grow md:max-w-[600px] ${s.about_cake__img}`} src='/images/Image_About-cake.webp' alt='' width={700} height={467} />
        <NavArrow label='Kuchen' />
      </>
    </Section>
  );
};
