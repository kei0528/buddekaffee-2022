import s from './Loader.module.scss';

export const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={`${s.loader} ${className ?? ''}`}>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className={s.cup}>
        <span></span>
      </div>
    </div>
  );
};
