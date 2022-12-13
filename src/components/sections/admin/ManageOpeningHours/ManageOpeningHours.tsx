import Image from 'next/image';

export const ManageOpeningHours = () => {
  return (
    <div className='border border-text-black rounded-xl overflow-hidden bg-lighter-yellow shadow-[0px_9px_#a7a7a7]'>
      <h2 className='px-5 py-5 border-b border-text-black text-black text-xl font-bold flex gap-4'>
        <Image src='/icons/Icon_Clock.svg' alt='' width={25} height={22} />
        Opening Hours
      </h2>
      <div className='p-5 max-h-48 text-lg'>Liebe Kaffeefreunde, Wir haben geöffnet: Mi - Fr, 9 - 16, Sa, 10 - 17, So, 11 - 16. Herbstferien: 15.10.22 - 8.11.22 Ab dem 9.11.22 sind wir wieder für euch da! Wir freuen uns auf euren Besuch! Herzlichst, euer BUDDE-Team</div>
      <button className='border-t border-text-black w-full py-4 flex justify-center gap-2 font-bold bg-blue-50 hover:bg-blue-100 active:bg-blue-200'>
        <Image src='/icons/Icon_Edit.svg' alt='' height={22} width={25} />
        Edit
      </button>
    </div>
  );
};
