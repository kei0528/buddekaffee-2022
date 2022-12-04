import Image from 'next/image';
import { BaseHeadline } from 'src/components/uis/BaseHeadline';
import s from './NewsModal.module.scss';

export const NewsModal = ({ newsOpen, close }: { newsOpen: boolean; close: () => void }) => {
  return (
    <>
      <article className={`${s.news} ${newsOpen ? s.open : s.close}`}>
        <button className='absolute right-5 top-5' onClick={close}>
          <Image src='/icons/Icon_Corss.svg' width={16} height={16} alt='Close News' />
        </button>
        <BaseHeadline label='Neue Öffnungszeiten' />
        <div className={s.news_contents}>Liebe Kaffeefreunde, Wir haben geöffnet: Mi - Fr, 9 - 16, Sa, 10 - 17, So, 11 - 16. Herbstferien: 15.10.22 - 8.11.22 Ab dem 9.11.22 sind wir wieder für euch da! Wir freuen uns auf euren Besuch! Herzlichst, euer BUDDE-Team</div>
        <time className='mt-12 block text-right text-gray-600'>01.01.10</time>
      </article>
      <div className={`${s.blur} ${newsOpen ? s.open : ''}`} onClick={close} />
    </>
  );
};
