import s from './Contact.module.scss';

// Utils
import { createRef } from 'react';

// Hooks
import { useElementOnVisible } from 'src/hooks/useElementOnVisible';

// Components
import Image from 'next/image';
import { BaseHeadline as Headline } from 'src/components/uis/BaseHeadline';
import { BaseSection as Section } from 'src/components/uis/BaseSection';
import { Button } from 'src/components/uis/Button';
import { NavArrow } from 'src/components/uis/NavArrow';
import { useContactState } from './Contact.state';
import { sendMail } from 'src/services/mailService';
import { fetchStatus, validateMessages } from 'src/utils/status';
import { regex } from 'src/utils/regex';

export const Contact = () => {
  const sectionRef = createRef<HTMLElement>();
  const { errors, register, handleSubmit, setSendStatus, sendStatus } = useContactState();

  useElementOnVisible({
    ref: sectionRef,
    callback: elm => {
      elm.dataset.isVisible = 'true';
    }
  });

  return (
    <Section outerClass={s.contact} ref={sectionRef}>
      <>
        <div className='bg-lighter-yellow rounded-md shadow-lg px-5 py-8 lg:flex lg:p-0 lg:overflow-hidden'>
          <div className='hidden  lg:block lg:w-1/2 lg:object-cover'>
            <Image className='h-full object-cover' src='/images/Image_Contact.webp' alt='' width={1000} height={819} />
          </div>
          <div className='py-14 lg:flex-1 lg:px-5 mxl:px-10 '>
            <Headline label='Kontakt' className='2xl:text-5xl' />
            {sendStatus === 'LOADING' ? (
              <div>loading...</div>
            ) : sendStatus === 'ERROR' ? (
              <div>Error!</div>
            ) : sendStatus === 'SUCCESS' ? (
              <div>Mail send!</div>
            ) : (
              <form
                className='flex flex-col gap-4'
                onSubmit={handleSubmit(async ({ subject, userMail, userMessage }) => {
                  setSendStatus('LOADING');
                  const result = await sendMail({ subject, message: userMessage, userMail });
                  setSendStatus(result.status === fetchStatus.success ? 'SUCCESS' : 'ERROR');
                })}
              >
                <label className={s.label}>
                  Email Adresse
                  <input
                    className={s.input}
                    type='text'
                    placeholder='Your email'
                    {...register('userMail', {
                      required: { value: true, message: validateMessages.mailAddressRequired },
                      pattern: { value: regex.mail, message: validateMessages.MailAddressInvalid }
                    })}
                  />
                  {errors.userMail && <span className={s.error}>{errors.userMail.message?.toString()}</span>}
                </label>
                <label className={s.label}>
                  Anliegen
                  <input
                    className={s.input}
                    type='text'
                    placeholder='Subject'
                    {...register('subject', {
                      maxLength: {
                        value: 30,
                        message: validateMessages.subjectTooLong
                      }
                    })}
                  />
                  {errors.subject && <span className={s.error}>{errors.subject.message?.toString()}</span>}
                </label>
                <label className={s.label}>
                  Nachricht
                  <textarea
                    className={`h-52 min-h-[180px] max-h-[260px] ${s.input}`}
                    placeholder='Message'
                    {...register('userMessage', {
                      required: { value: true, message: validateMessages.messageRequired },
                      maxLength: {
                        value: 1000,
                        message: validateMessages.messageTooLong
                      }
                    })}
                  />
                  {errors.userMessage && <span className={s.error}>{errors.userMessage.message?.toString()}</span>}
                </label>
                <Button>Senden</Button>
              </form>
            )}
          </div>
        </div>
        <NavArrow label='Kontakt' position='end' />
      </>
    </Section>
  );
};
