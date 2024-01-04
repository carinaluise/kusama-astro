import React from 'react';
import { motion } from 'framer-motion';

interface BoxTypes {
  title: string;
  p1: string;
  p2: string;
  boxAnimation: any;
  'client:load': true;
}

const BoxSmall = ({ title, p1, p2, boxAnimation }: BoxTypes) => {
  return (
    <article className="relative mx-auto w-[90%] md:w-72 lg:w-1/4">
      <div className="h-full border-2 border-pink px-8 py-8 md:py-12">
        <h2 className="mb-12">{title}</h2>
        <p className="mb-6 flex w-full justify-between text-lg">
          <a className="w-2/3">{p1}</a>
          <span className="mx-8">→</span>
        </p>
        <p className="mb-6 flex w-full justify-between text-lg">
          <a className="w-2/3">{p2}</a>
          <span className="mx-8">→</span>
        </p>
      </div>
      <motion.div
        style={{
          translateY: boxAnimation,
          translateX: boxAnimation,
        }}
        className="absolute bottom-1 left-0 h-full w-full border-2 border-pink md:bottom-0 md:top-2"
      />
    </article>
  );
};

export default BoxSmall;
