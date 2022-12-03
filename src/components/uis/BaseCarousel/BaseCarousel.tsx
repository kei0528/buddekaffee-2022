import { ReactElement } from 'react';
import s from './BaseCarousel.module.scss';

export const BaseCarousel = ({ contents }: { contents: ReactElement }) => {
  let ref: HTMLElement | undefined;

  return (
    <></>
    // <section ref={ref} class={`splide ${s.carousel}`} aria-label='Splide Basic HTML Example'>
    //   <div class='splide__track'>
    //     <ul class='splide__list'>
    //       <For each={contents}>{elm => <li class='splide__slide w-1/3'>{elm}</li>}</For>
    //     </ul>
    //   </div>
    // </section>
  );
};
