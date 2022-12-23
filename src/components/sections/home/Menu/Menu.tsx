import s from './Menu.module.scss';
import Image from 'next/image';
import { useRef } from 'react';
import { BaseHeadline as Headline } from 'src/components/uis/BaseHeadline';
import { BaseParagraph as P } from 'src/components/uis/BaseParagraph';
import { BaseSection as Section } from 'src/components/uis/BaseSection';
import { Button } from 'src/components/uis/Button';
import { NavArrow } from 'src/components/uis/NavArrow';
import { useElementOnVisible } from 'src/hooks/useElementOnVisible';
import { LinkButton } from 'src/components/uis/LinkButton';

export const Menu = () => {
  const sectionRef = useRef(null);
  useElementOnVisible({
    ref: sectionRef,
    callback: e => {
      e.dataset.isVisible = 'true';
    }
  });

  return (
    <Section innerClass='sm:flex sm:items-center' outerClass={s.menu} ref={sectionRef}>
      <div className='flex-1'>
        <Headline label='Menü' className={s.menu__headline} />
        <P className={s.menu__description}>
          <>
            Ganz lecker. Ganz lecker.
            <br />
            Kaffee ist ein saisonales Produkt, daher variiert die Auswahl unserer Speisen und Getränke.
          </>
        </P>
        <LinkButton href='/menu' className={s.menu__btn}>
          Zum Menü
        </LinkButton>
      </div>
      <Image className={s.menu__img} src='/images/Image_Menu.webp' alt='' width={846} height={846} />
      <NavArrow label='Menü' />
    </Section>
  );
};
