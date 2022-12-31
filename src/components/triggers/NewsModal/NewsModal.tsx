import s from './NewsModal.module.scss';

import { BaseHeadline } from 'src/components/uis/BaseHeadline';
import { BaseModal } from '../BaseModal';

export const NewsModal = ({ newsOpen, close, headline, description, date }: { newsOpen: boolean; close: () => void; headline: string; description: string; date: number }) => {
  return (
    <BaseModal modalOpen={newsOpen} close={close}>
      <>
        <BaseHeadline label={headline} />
        <div className={s.news_contents}>{description}</div>
        <time className='mt-12 block text-right text-gray-600'>{new Date(date).toLocaleDateString()}</time>
      </>
    </BaseModal>
  );
};
