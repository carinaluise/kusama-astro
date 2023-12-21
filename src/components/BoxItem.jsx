import { motion, useScroll, useTransform } from 'framer-motion';

const BoxItem = ({ title, p1, p2, structure = 'default' }) => {
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

  const defaultBox = () => (
    <article className="mx-auto relative w-[90%] md:w-[70%] lg:left-1/4 lg:w-1/2">
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
        className="absolute top-0 left-0 w-full border-2 h-full border-pink"
      ></motion.div>
    </article>
  );
  const smallBox = () => (
    <article className="relative mx-auto w-[90%] md:w-72 lg:w-1/4">
      <div className="border-2 border-pink px-8 py-8 md:py-12 h-full">
        <h2 className="mb-12">{title}</h2>
        <p className="flex w-full text-lg mb-6 justify-between">
          <a className="w-2/3">{p1}</a>
          <span className="mx-8">→</span>
        </p>
        <p className="flex w-full text-lg mb-6 justify-between">
          <a className="w-2/3">{p2}</a>
          <span className="mx-8">→</span>
        </p>
      </div>
      <motion.div
        style={{
          translateY: boxAnimationSmall,
          translateX: boxAnimationSmall,
        }}
        className="absolute bottom-1 md:bottom-0 md:top-2 left-0 w-full border-2 h-full border-pink"
      ></motion.div>
    </article>
  );

  return structure === 'small' ? smallBox() : defaultBox();
};

export default BoxItem;
