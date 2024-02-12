import React from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Link from '../Link';

interface BoxWithLinksTypes {
  title: string;
  link1: { title: string; href: string };
  link2: { title: string; href: string };
  'client:load': true;
}

const BoxWithLinks = ({ title, link1, link2 }: BoxWithLinksTypes) => {
  const { scrollYProgress } = useScroll();

  const boxAnimation = useTransform(
    scrollYProgress,
    [0.9, 1],
    ['-0.5%', '-6%']
  );

  return (
    <motion.article
      className="relative mx-auto w-[90%] md:w-72 lg:w-1/4"
      style={{
        y: boxAnimation,
      }}
    >
      <div className="h-full border-2 border-pink px-8 py-8 md:py-12">
        <h2 className="mb-12">{title}</h2>
        <p className="mb-6 flex w-full justify-between text-lg">
          <Link
            href={link1.href}
            classNames="w-2/3"
          >
            {link1.title}
          </Link>
          <span className="mx-8">→</span>
        </p>
        <p className="mb-6 flex w-full justify-between text-lg">
          <Link
            href={link2.href}
            classNames="w-2/3"
          >
            {link2.title}
          </Link>
          <span className="mx-8">→</span>
        </p>
      </div>
      <motion.div
        style={{
          translateX: boxAnimation,
          translateY: boxAnimation,
        }}
        className="absolute left-0 top-0 h-full w-full border-2 border-pink"
      ></motion.div>
    </motion.article>
  );
};

export default BoxWithLinks;
