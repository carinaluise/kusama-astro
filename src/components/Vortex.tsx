import React, {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';

const Vortex = () => {
  const { scrollYProgress } = useScroll();

  const meshAnimation = useTransform(
    scrollYProgress,
    [0.1, 0.2],
    [50, 150],
    {
      clamp: false,
    }
  );

  return (
    <motion.section
      style={{ y: meshAnimation }}
      className="relative bottom-16 my-24"
    >
      <img
        className="mx-auto"
        src={`/images/vortex.svg`}
      />
    </motion.section>
  );
};

export default Vortex;
