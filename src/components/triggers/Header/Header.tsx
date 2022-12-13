import s from './Header.module.scss';
import { useHeaderState } from './Header.state';
import Image from 'next/image';
import { NewsModal } from '../NewsModal';

export const Header = () => {
  const { isOpen, toggleMenu, newsIsOpen, toggleNewsIsOpen } = useHeaderState();

  const navItems = [
    { name: 'HOME', link: '#home' },
    { name: 'ÜBER UNS', link: '#about-us' },
    { name: 'GALLERIE', link: '#gallery' },
    { name: 'KONTAKT', link: '#contact' }
  ];

  return (
    <>
      <header className='h-24 flex justify-end items-center p-5 fixed w-screen z-50 bg-white md:static md:flex-col md:justify-center md:h-auto md:p-8 md:pb-4'>
        <Image className='w-14 absolute left-0 right-0 top-0 bottom-0 m-auto md:static md:w-20 lg:w-24' src='/logo/Logo_Budde-full.webp' alt='' width={400} height={425} />
        <button className={`${s.burger_btn} ${isOpen ? s.is_open : ''}`} onClick={() => toggleMenu()}>
          <div />
          <div />
          <div />
        </button>
        <ul className={`${s.header_menu} ${isOpen ? s.is_open : ''} `}>
          {navItems.map((item, index) => (
            <li className={`${s.item} ${isOpen ? s.appear : ''}`} style={{ transitionDelay: `${100 + index * 100}ms` }} key={item.name + index}>
              <a className='text-text-black text-2xl font-display font-bold duration-300 lg:text-3xl md:hover:-translate-y-1' href={item.link} onClick={toggleMenu}>
                {item.name}
              </a>
            </li>
          ))}
          <li className={`${s.item} ${isOpen ? s.appear : ''}`} style={{ transitionDelay: `${100 + navItems.length * 100}ms` }}>
            <button
              className={`text-text-black text-2xl font-display font-bold duration-300 lg:text-3xl md:hover:-translate-y-1 relative ${s.badged}`}
              onClick={() => {
                toggleMenu();
                toggleNewsIsOpen();
              }}
            >
              News
            </button>
          </li>
        </ul>
      </header>
      <div className={isOpen ? s.bg_blur : ''} onClick={toggleMenu} />
      <NewsModal newsOpen={newsIsOpen} close={toggleNewsIsOpen} />
    </>
  );
};
