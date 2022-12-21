import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BaseAnchor } from 'src/components/uis/BaseAnchor';
import { BaseHeadline as Headline } from 'src/components/uis/BaseHeadline';
import { BaseSection as Section } from 'src/components/uis/BaseSection';

const imagePaths = ['/images/main-gallery/Image_Gallery2.webp', '/images/main-gallery/Image_Gallery1.webp', '/images/main-gallery/Image_Gallery3.webp', '/images/main-gallery/Image_Gallery4.webp', '/images/main-gallery/Image_Gallery5.webp', '/images/main-gallery/Image_Gallery6.webp', '/images/main-gallery/Image_Gallery7.webp', '/images/main-gallery/Image_Gallery8.webp', '/images/main-gallery/Image_Gallery9.webp', '/images/main-gallery/Image_Gallery10.webp', '/images/main-gallery/Image_Gallery11.webp'];

const GalleryImage = ({ path }: { path: string }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const body = document.querySelector('body')!;
    if (open) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  });

  return (
    <>
      <button className='w-full rounded-xl overflow-hidden relative aspect-square duration-150 hover:brightness-75' onClick={() => setOpen(true)}>
        <Image className='object-cover' src={path} alt='' fill />
      </button>
      <div className={`fixed top-0 left-0 w-full h-full bg-dark-transparent z-50 justify-center items-center ${open ? 'flex' : 'hidden'}`} onClick={() => setOpen(false)}>
        <div className={`w-[95vw] max-w-3xl h-auto relative aspect-square ${!open ? '-translate-y-14 opacity-0' : 'translate-y-0 opacity-100'}`}>
          <Image className='object-contain' src={path} alt='' fill />
        </div>
      </div>
    </>
  );
};

export const GalleryImages = () => {
  return (
    <Section>
      <>
        <Headline label='Gallerie' />
        <div className='py-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-7'>
          {imagePaths.map(path => (
            <GalleryImage path={path} key={path} />
          ))}
          <div className='rounded-xl flex items-center justify-center flex-col gap-5 aspect-square bg-lighter-yellow'>
            <Image src='/icons/Icon-Instagram.svg' alt='' width={40} height={40} />
            <strong className='max-w-[200px] text-center'>
              Visit our Instagram{' '}
              <BaseAnchor href='https://www.instagram.com/buddekaffee/' target='_blank'>
                @buddekaffee
              </BaseAnchor>{' '}
              to see our full gallery!
            </strong>
          </div>
        </div>
      </>
    </Section>
  );
};
