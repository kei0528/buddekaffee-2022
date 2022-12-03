import { uuid } from 'src/utils/uuid';

import Image from 'next/image';
import { BaseCarousel as Carousel } from 'src/components/uis/BaseCarousel';
import { BaseHeadline as Headline } from 'src/components/uis/BaseHeadline';
import { BaseSection as Section } from 'src/components/uis/BaseSection';
import { Button } from 'src/components/uis/Button';
import { NavArrow } from 'src/components/uis/NavArrow';

const imgSrcs = ['/images/gallery/Image_Gallery1.jpg', '/images/gallery/Image_Gallery2.jpg', '/images/gallery/Image_Gallery3.jpg', '/images/gallery/Image_Gallery4.jpg', '/images/gallery/Image_Gallery5.jpg', '/images/gallery/Image_Gallery6.jpg', '/images/gallery/Image_Gallery7.jpg', '/images/gallery/Image_Gallery8.jpg', '/images/gallery/Image_Gallery9.jpg'];

const ImageWrapper = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <div className='w-[290px] h-[290px]'>
      <Image alt='' src={imgSrc} width={300} height={300} />
    </div>
  );
};

export const Gallery = () => {
  return (
    <Section outerClass='pt-16 sm:pt-24 md:pt-32 lg:pt-40' innerClass=''>
      <>
        <Headline label='Gallery' />
        <div className='w-full'>
          <Carousel
            contents={imgSrcs.map(src => (
              <ImageWrapper imgSrc={src} key={uuid()} />
            ))}
            slideWidth='290px'
            id='gallery'
          />
        </div>
        <Button className='mt-12 w-full sm:w-fit sm:mx-auto sm:block'>Zum Gallerie</Button>
        <NavArrow label='Gallerie' />
      </>
    </Section>
  );
};
