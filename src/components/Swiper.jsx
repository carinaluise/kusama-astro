import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Pagination,
  EffectFlip,
  Mousewheel,
  Autoplay,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';

import swiperData from '../data/components/swiper';

const CustomSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section>
      <Swiper
        className="max-h-[40vh] overflow-hidden md:max-h-[30vh] lg:max-h-[30vh]"
        effect={'flip'}
        direction={'vertical'}
        onSlideChange={({ activeIndex }) => setActiveIndex(activeIndex)}
        pagination={true}
        spaceBetween={0}
        mousewheel={true}
        modules={[Mousewheel, Pagination, EffectFlip, Autoplay]}
        slidesPerView={0}
      >
        {swiperData.map((group, index) => (
          <SwiperSlide
            key={group.items[1].description}
            className="md:text-center"
          >
            {activeIndex === index && (
              <div
                key={index}
                className="flex h-full flex-wrap"
              >
                {group.items.map((item, itemIndex) => (
                  <div
                    className="mx-auto flex max-w-[90%] flex-col justify-center md:max-w-[45%] lg:max-w-[30%]"
                    key={item.title}
                  >
                    <h6
                      className={`${
                        itemIndex % 2 == 0
                          ? 'text-gray/70'
                          : 'text-pink'
                      }`}
                    >
                      {item.description.toUpperCase()}
                    </h6>
                    <h5 className="mb-2 text-xl">
                      {item.title.toUpperCase()}
                    </h5>
                    <p className="text-[12px] lg:text-sm">
                      {item.paragraph}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CustomSwiper;
