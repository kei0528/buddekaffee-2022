import s from './ManageMenu.module.scss';
import Image from 'next/image';
import { BaseModal as Modal } from 'src/components/triggers/BaseModal';
import { useManageMenuState } from './ManageMenu.state';
import { Button } from 'src/components/uis/Button';

const AddMenu = ({ onAdd }: { onAdd: boolean }) => {
  return (
    <>
      <div className={`${s.on_add} ${!onAdd ? s.close : ''}`}>
        <label className='mb-2 block'>
          <span className='text-lg mb-2 block'>Category</span>
          <select className='border border-text-black w-full p-2 rounded-md' defaultValue='Drink'>
            <option value='Drink'>Drink</option>
            <option value='Food'>Food</option>
          </select>
        </label>

        <label className='mb-2 block'>
          <span className='text-lg mb-2 block'>Name</span>
          <input className='border border-text-black w-full p-2 rounded-md' type='text' />
        </label>

        <label className='mb-8 block'>
          <span className='text-lg mb-2 block'>Price</span>
          <input className='border border-text-black w-full p-2 rounded-md' type='number' />
        </label>

        <Button className='w-full !bg-blue-50 hover:!bg-black'>Add</Button>
      </div>
    </>
  );
};

export const ManageMenu = () => {
  const { toggleOpen, isOpen, close, onAdd, toggleAdd } = useManageMenuState();

  return (
    <>
      <div className='border border-text-black rounded-xl flex flex-col overflow-hidden bg-lighter-yellow shadow-[0px_9px_#a7a7a7]'>
        <h2 className='px-5 py-5 border-b border-text-black text-black text-xl font-bold flex gap-4'>
          <Image src='/icons/Icon_Menu.svg' alt='' width={25} height={25} />
          Menu
        </h2>
        {/* <div className='p-5 max-h-48 text-lg'>{news ? news.title : ''}</div> */}
        <button className='border-t border-text-black w-full py-4 flex justify-center gap-2 font-bold bg-blue-50 mt-auto hover:bg-blue-100 active:bg-blue-200' onClick={toggleOpen}>
          <Image src='/icons/Icon_Edit.svg' alt='' height={22} width={25} />
          Edit
        </button>
      </div>
      <Modal modalOpen={isOpen} close={close}>
        <div>
          <div>
            <h3>Drinks</h3>
          </div>
          <div>
            <h3>Foods</h3>
          </div>
          <button className={`relative w-full pl-4 pr-10 border-2 bg-gray-200 rounded-lg border-text-black duration-150 ${onAdd ? 'py-1' : 'py-4 text-center'}`} onClick={toggleAdd}>
            {onAdd ? 'Close' : 'Add'}
          </button>
          <AddMenu onAdd={onAdd} />
        </div>
      </Modal>
    </>
  );
};
