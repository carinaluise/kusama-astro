import React from 'react';
import SwiperItem, { SwiperItemTypes } from './SwiperItem';

export interface SwiperGroupTypes {
  items: SwiperItemTypes[];
}

const SwiperGroup = ({
  group,
}: {
  group: SwiperGroupTypes;
  activeIndex: number;
}) => {
  return (
    <div className="flex h-full flex-wrap">
      {group.items.map((item, itemIndex) => (
        <SwiperItem
          index={itemIndex}
          key={item.title}
          item={item}
        />
      ))}
    </div>
  );
};

export default SwiperGroup;
