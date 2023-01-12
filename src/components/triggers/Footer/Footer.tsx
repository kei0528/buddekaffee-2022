import { useAtom } from 'jotai';
import Image from 'next/image';
import Link from 'next/link';
import { isLoggedInAtom } from 'src/store/auth.state';
import type { IgResType } from 'src/types/instagram.type';
import { uuid } from 'src/utils/uuid';

export const Footer = ({ igPhotos }: { igPhotos: IgResType }) => {
  const [isLoggedIn] = useAtom(isLoggedInAtom);

  return (
    <footer className='px-5 py-10 border-t sm:px-12 bg-lighter-yellow'>
      <div className='max-w-max-section mx-auto flex justify-between gap-20 flex-wrap'>
        <div>
          <h3 className='text-3xl font-bold font-display mb-3'>Adresse</h3>
          <div className='flex gap-10'>
            <div>
              <h6>Budde Kaffee</h6>
              <address className='not-italic'>
                Buddestraße 31F
                <br />
                13507 Berlin
              </address>
              <a className='mt-2 block' href='tel:+491732027575'>
                TEL:+491732027575
              </a>
            </div>
            <div className='flex flex-col'>
              <span>MI-FR: 9:00 - 16:00</span>
              <span>SA: 10:00 - 17:00</span>
              <span>SO: 11:00 - 16:00</span>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-start'>
          <h3 className='text-3xl font-bold font-display mb-3 flex gap-5 items-baseline'>
            Instagram
            <a className='text-sky-blue underline flex gap-2 text-base' href='https://www.instagram.com/buddekaffee'>
              @buddekaffee
              <Image src='/icons/Icon-Arrow_right.svg' alt='Redirect to Instagram' width={5} height={5} />
            </a>
          </h3>

          <ul className='grid grid-cols-3 gap-2'>
            {igPhotos.data.map(imgData => (
              <li className='w-[30vw] h-[30vw] overflow-hidden relative list-none sm:w-24 sm:h-24' key={uuid()}>
                <a href={imgData.permalink}>
                  <Image width={96} height={96} className='h-full w-full object-cover duration-150 hover:brightness-75' src={imgData.media_url} alt='' />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <small className='mt-16 file: block text-center'>&copy; Budde Kaffee 2018 - {new Date().getFullYear()}</small>
      <Link className='block w-fit mx-auto mt-3 text-xs hover:underline' href='/imprint'>
        Impressum
      </Link>
      <Link className='block w-fit mx-auto mt-3 text-xs hover:underline' href={isLoggedIn ? '/admin' : '/login'}>
        {isLoggedIn ? 'Zu Admin-Seite' : 'Login'}
      </Link>
    </footer>
  );
};
