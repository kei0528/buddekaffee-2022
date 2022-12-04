import s from './Hero.module.scss';
// Components
import Image from 'next/image';
import { NavArrow } from 'src/components/uis/NavArrow';

const ListItem = ({ label }: { label: string }) => {
  return <li className='font-display font-bold text-xl lg:text-2xl'>{label}</li>;
};

export const Hero = () => {
  return (
    <section className={s.hero}>
      <div className='mx-auto'>
        <Image src='/images/Image_Cafe-drawn.webp' alt='' placeholder='blur' blurDataURL='/images/Image_Cafe-drawn-low-reso.webp' width={1100} height={872} />
      </div>
      <ul className='flex justify-center gap-10 my-10'>
        <ListItem label='MI - FR: 9 - 16' />
        <ListItem label='SA: 10 - 17' />
        <ListItem label='SO: 11 - 16' />
      </ul>
      <NavArrow label='HOME' position='start' />
    </section>
  );
};
