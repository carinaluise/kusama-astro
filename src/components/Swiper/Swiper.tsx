import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Pagination,
  EffectFlip,
  Mousewheel,
  Autoplay,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-flip';
import swiperData from '../../data/components/swiper';

import SwiperGroup, { SwiperGroupTypes } from './SwiperGroup';

const CustomSwiper = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="">
      <Swiper
        className="lg:max-h-[30vh max-h-[40vh] overflow-hidden md:max-h-[30vh]"
        effect={'flip'}
        direction={'vertical'}
        onSlideChange={({ activeIndex }: { activeIndex: number }) =>
          setActiveIndex(activeIndex)
        }
        pagination={true}
        spaceBetween={0}
        mousewheel={true}
        modules={[Mousewheel, Pagination, EffectFlip, Autoplay]}
        slidesPerView={0}
      >
        {swiperData.map((group: SwiperGroupTypes, index: number) => (
          <SwiperSlide
            key={group.items[1].description}
            className="md:text-center"
          >
            {activeIndex === index && (
              <SwiperGroup
                group={group}
                activeIndex={activeIndex}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CustomSwiper;
