'use client';

// Hooks
import { ChangeEventHandler } from 'react';
import { LabelType, useManageNewsState } from './ManageNews.state';

// Components
import Image from 'next/image';
import { BaseModal as Modal } from 'src/components/triggers/BaseModal';
import { Button } from 'src/components/uis/Button';

const OptionBtn = ({ label, description, className, textAreaOnChange, textAreaShown, buttonOnClick }: { label: LabelType; description: string; className?: string; textAreaOnChange: ChangeEventHandler<HTMLTextAreaElement>; textAreaShown: LabelType; buttonOnClick: () => void }) => {
  return (
    <div className={`flex flex-col duration-200 ${textAreaShown === label && 'py-4'} ${className ?? ''}`} id={`option-root-${label}`}>
      <button className={`relative pl-4 py-4 pr-10 border-2 bg-gray-200 rounded-lg text-left border-text-black ${textAreaShown === label && 'border-b-0 rounded-br-none rounded-bl-none font-bold'}`} onClick={buttonOnClick}>
        <h3 className='font-bold text-lg'>
          {label} <Image className={`absolute right-4 ${textAreaShown === label ? 'top-[24px]' : 'top-[18px]'}`} src={textAreaShown === label ? '/icons/Icon_Arrow-down.svg' : '/icons/Icon_Edit.svg'} alt={textAreaShown === label ? 'Close' : 'Edit'} width={textAreaShown === label ? 16 : 20} height={textAreaShown === label ? 10 : 14} />
        </h3>
        {textAreaShown !== label && <span className='text-gray-500 truncate-line-2'>{description}</span>}
      </button>

      <textarea className={`${textAreaShown === label ? 'h-80 pointer-events-auto duration-200 block border-2 border-text-black rounded-br-lg rounded-bl-lg resize-none p-4' : 'h-0 overflow-hidden pointer-events-none'} duration-200`} defaultValue={description} onChange={textAreaOnChange} />
    </div>
  );
};

export const ManageNews = () => {
  const { isOpen, toggleOpen, news, setNewsDescription, setNewsTitle, textAreaShown, toggleTextAreaShown, sendNews } = useManageNewsState();

  return (
    <>
      <div className='border border-text-black rounded-xl flex flex-col overflow-hidden bg-lighter-yellow shadow-[0px_9px_#a7a7a7]'>
        <h2 className='px-5 py-5 border-b border-text-black text-black text-xl font-bold flex gap-4'>
          <Image src='/icons/Icon_News.svg' alt='' width={25} height={22} />
          News
        </h2>
        <div className='p-5 max-h-48 text-lg'>{news ? news.title : ''}</div>
        <button className='border-t border-text-black w-full py-4 flex justify-center gap-2 font-bold bg-blue-50 mt-auto hover:bg-blue-100 active:bg-blue-200' onClick={toggleOpen}>
          <Image src='/icons/Icon_Edit.svg' alt='' height={22} width={25} />
          Edit
        </button>
      </div>
      <Modal close={toggleOpen} modalOpen={isOpen}>
        <div className='flex flex-col'>
          {isOpen && (
            <>
              <OptionBtn className='mb-3' label='Title' description={news ? news.title : ''} textAreaOnChange={e => setNewsTitle(e.target.value)} textAreaShown={textAreaShown} buttonOnClick={() => toggleTextAreaShown('Title')} />
              <OptionBtn className='mb-5' label='Description' description={news ? news.description : ''} textAreaOnChange={e => setNewsDescription(e.target.value)} textAreaShown={textAreaShown} buttonOnClick={() => toggleTextAreaShown('Description')} />
              <Button className='!bg-blue-50 hover:!bg-black' onClick={sendNews}>
                Update News
              </Button>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};
