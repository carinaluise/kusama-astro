import React from 'react';
import { motion } from 'framer-motion';

interface BoxTypes {
  title: string;
  p1: string;
  p2: string;
  boxAnimation: any;
  'client:load': true;
}

const Box = ({ title, p1, p2, boxAnimation }: BoxTypes) => {
  return (
    <article className="relative mx-auto w-[90%] md:w-[70%] lg:left-1/4 lg:w-1/2">
      <div className={`border-2 border-pink px-8 py-8 md:py-12`}>
        <h2>{title}</h2>
        <p>{p1}</p>
        <p>{p2}</p>
      </div>
      <motion.div
        style={{
          translateX: boxAnimation,
          translateY: boxAnimation,
        }}
        className="absolute left-0 top-0 h-full w-full border-2 border-pink"
      ></motion.div>
    </article>
  );
};

export default Box;
