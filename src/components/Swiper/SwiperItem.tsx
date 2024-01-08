import React from 'react';

export interface SwiperItemTypes {
  title: string;
  description: string;
  paragraph: string;
}

const SwiperItem = ({
  item,
  index,
}: {
  item: SwiperItemTypes;
  index: number;
}) => {
  return (
    <div className="mx-auto flex max-w-[90%] flex-col justify-center md:max-w-[45%] lg:max-w-[30%]">
      <h6
        className={`${
          index % 2 === 0 ? 'text-gray/70' : 'text-pink'
        }`}
      >
        {item.description.toUpperCase()}
      </h6>
      <h5 className="mb-2 text-xl">{item.title.toUpperCase()}</h5>
      <p className="text-[12px] lg:text-[14px]">{item.paragraph}</p>
    </div>
  );
};

export default SwiperItem;
