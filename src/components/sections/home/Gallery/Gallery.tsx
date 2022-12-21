import s from './Gallery.module.scss';

import { uuid } from 'src/utils/uuid';

import Image from 'next/image';
import { BaseCarousel as Carousel } from 'src/components/uis/BaseCarousel';
import { BaseHeadline as Headline } from 'src/components/uis/BaseHeadline';
import { BaseSection as Section } from 'src/components/uis/BaseSection';
import { NavArrow } from 'src/components/uis/NavArrow';
import { useElementOnVisible } from 'src/hooks/useElementOnVisible';
import { createRef } from 'react';
import { LinkButton } from 'src/components/uis/LinkButton';

const imgSrcs = ['/images/home-gallery/Image_Gallery1.webp', '/images/home-gallery/Image_Gallery2.webp', '/images/home-gallery/Image_Gallery3.webp', '/images/home-gallery/Image_Gallery7.webp', '/images/home-gallery/Image_Gallery4.webp', '/images/home-gallery/Image_Gallery5.webp', '/images/home-gallery/Image_Gallery6.webp'];

const ImageWrapper = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <div className='w-[290px] h-[290px]'>
      <Image alt='' src={imgSrc} width={300} height={300} />
    </div>
  );
};

export const Gallery = () => {
  const sectionRef = createRef<HTMLElement>();
  useElementOnVisible({
    ref: sectionRef,
    callback: elm => {
      elm.dataset.isVisible = 'true';
    }
  });

  return (
    <Section ref={sectionRef} outerClass={s.gallery} id='gallery'>
      <>
        <Headline className={s.headline} label='Gallery' />
        <div className='w-full'>
          <Carousel
            className={s.carousel}
            contents={imgSrcs.map(src => (
              <ImageWrapper imgSrc={src} key={uuid()} />
            ))}
            slideWidth='290px'
            id='gallery'
          />
        </div>
        <div className={s.button}>
          <LinkButton className='mt-12 w-full  sm:w-fit sm:mx-auto sm:block' href='/gallery'>
            Zum Gallerie
          </LinkButton>
        </div>
        <NavArrow label='Gallerie' />
      </>
    </Section>
  );
};
