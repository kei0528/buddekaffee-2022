import s from './Hero.module.scss';
// Components
import Image from 'next/image';
import { NavArrow } from 'src/components/uis/NavArrow';

const ListItem = ({ label }: { label: string }) => {
  return <li className='font-display font-bold text-xl lg:text-2xl'>{label}</li>;
};

export const Hero = () => {
  return (
    <section id='home' className={s.hero}>
      <div className='mx-auto max-w-[1040px] md:w-11/12'>
        <Image src='/images/Image_Cafe-drawn.webp' alt='' placeholder='blur' blurDataURL='/images/Image_Cafe-drawn-low-reso.webp' width={1100} height={872} />
      </div>
      <ul className='flex justify-center gap-10 my-10'>
        <ListItem label='MI - FR: 9 - 16' />
        <ListItem label='SA: 10 - 17' />
        <ListItem label='SO: 11 - 16' />
      </ul>
      <a href='#about-us' className='mx-auto relative z-10 cursor-pointer p-1 animate-bounce hover:animate-none'>
        <Image src='/icons/Icon_Triangle-down.svg' alt='Zu Über uns' width={31} height={12} />
      </a>
      <NavArrow label='HOME' position='start' />
    </section>
  );
};
