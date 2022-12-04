import 'swiper/css';
import 'swiper/css/pagination';
import s from './BaseCarousel.module.scss';

import { ReactElement, useMemo, useRef } from 'react';
import { uuid } from 'src/utils/uuid';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

type Props = {
  contents: ReactElement[];
  slideWidth: string;
  id: string;
  className?: string;
};

export const BaseCarousel = ({ contents, slideWidth, id, className }: Props) => {
  return (
    <div className={`relative ${className ?? ''}`}>
      <Swiper
        slidesPerView='auto'
        spaceBetween={13}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: `#next-btn-${id}`,
          prevEl: `#prev-btn-${id}`
        }}
        pagination={{
          el: `#pagination-${id}`,
          type: 'bullets'
        }}
      >
        {contents.map(Content => (
          <SwiperSlide style={{ width: slideWidth }} key={uuid()}>
            {Content}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='hidden mxl:absolute mxl:top-0 mxl:left-0 mxl:w-full mxl:h-full mxl:flex mxl:items-center mxl:justify-between'>
        <button className='-translate-x-14' id={`prev-btn-${id}`}>
          <Image src='/icons/Icon-Slider_arrow_next.svg' alt='Move Carousel to right' width={11} height={21} />
        </button>
        <button className='translate-x-14' id={`next-btn-${id}`}>
          <Image src='/icons/Icon-Slider_arrow_prev.svg' alt='Move Carousel to right' width={11} height={21} />
        </button>
      </div>
      <div className={s.pagination} id={`pagination-${id}`} />
    </div>
  );
};
