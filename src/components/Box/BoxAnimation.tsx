import React, { useScroll, useTransform } from 'framer-motion';

import BoxSmall from './BoxSmall';
import Box from './Box';

interface BoxWrapperTypes {
  title: string;
  p1: string;
  p2: string;
  structure?: string;
  'client:load': true;
}

const BoxAnimation = ({
  title,
  p1,
  p2,
  structure = 'default',
}: BoxWrapperTypes) => {
  const { scrollYProgress } = useScroll();

  const boxAnimation = useTransform(
    scrollYProgress,
    [0.15, 0.25],
    ['-0.5%', '-6%']
  );
  const boxAnimationSmall = useTransform(
    scrollYProgress,
    [0.9, 1],
    ['-0.5%', '-6%']
  );

  return structure === 'small' ? (
    <BoxSmall
      client:load
      title={title}
      p1={p1}
      p2={p2}
      boxAnimation={boxAnimationSmall}
    />
  ) : (
    <Box
      client:load
      title={title}
      p1={p1}
      p2={p2}
      boxAnimation={boxAnimation}
    />
  );
};

export default BoxAnimation;
