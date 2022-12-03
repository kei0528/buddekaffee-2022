import s from './Contact.module.scss';

import { BaseHeadline as Headline } from 'src/components/uis/BaseHeadline';
import { BaseSection as Section } from 'src/components/uis/BaseSection';
import { Button } from 'src/components/uis/Button';
import { NavArrow } from 'src/components/uis/NavArrow';
import Image from 'next/image';

export const Contact = () => {
  return (
    <Section outerClass=''>
      <>
        <div className='bg-lighter-yellow rounded-md shadow-lg px-5 py-8 lg:flex lg:p-0 lg:overflow-hidden'>
          <div className='hidden  lg:block lg:w-1/2 lg:object-cover'>
            <Image className='h-full object-cover' src='/images/Image_Contact.webp' alt='' width={1000} height={819} />
          </div>
          <div className='lg:flex-1 py-8  lg:px-5 mxl:px-10 py-14'>
            <Headline label='Kontakt' className='2xl:text-5xl' />
            <form className='flex flex-col gap-4'>
              <label className={s.label}>
                Email Adresse
                <input className={s.input} />
              </label>
              <label className={s.label}>
                Anliegen
                <input className={s.input} />
              </label>
              <label className={s.label}>
                Nachricht
                <textarea className={`h-52 min-h-[180px] max-h-[260px] ${s.input}`} />
              </label>
              <Button>Senden</Button>
            </form>
          </div>
        </div>
        <NavArrow label='Kontakt' position='end' />
      </>
    </Section>
  );
};
