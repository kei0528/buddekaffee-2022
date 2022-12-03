import s from './NavArrow.module.scss';

export const NavArrow = ({ label, position }: { label: string; position?: 'start' | 'end' }) => {
  return (
    <div className={s.arrow} data-type={position ?? 'normal'}>
      <div className='writing-mode-vertical-lr -ml-[10px] bg-white py-8 font-display text-xl tracking-wider font-bold pointer-events-none'>{label}</div>
    </div>
  );
};
