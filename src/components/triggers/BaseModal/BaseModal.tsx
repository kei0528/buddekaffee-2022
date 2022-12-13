import s from './BaseModal.module.scss';
import Image from 'next/image';
import { ReactElement } from 'react';

export const BaseModal = ({ modalOpen, close, children }: { modalOpen: boolean; children: ReactElement; close: () => void }) => {
  return (
    <>
      <article className={`${s.modal} ${modalOpen ? s.open : s.close}`}>
        <button className='absolute right-5 top-5' onClick={close}>
          <Image src='/icons/Icon_Cross.svg' width={16} height={16} alt='Close modal' />
        </button>
        {children}
      </article>
      <div className={`${s.blur} ${modalOpen ? s.open : ''}`} onClick={close} />
    </>
  );
};
