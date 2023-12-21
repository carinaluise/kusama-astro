import { motion, useScroll, useTransform } from 'framer-motion';

const Canary = () => {
  const { scrollYProgress } = useScroll();

  const meshAnimation2 = useTransform(
    scrollYProgress,
    [0.7, 0.8],
    [0, -150],
    {
      clamp: false,
    }
  );

  return (
    <motion.section>
      <motion.h2
        style={{ y: meshAnimation2 }}
        className="text-2xl z-20 relative top-20 md:top-10 lg:top-60 w-1/2 lg:w-1/3"
      >
        Develop on the Canary Network
      </motion.h2>
      <img
        src={`/images/mesh.png`}
        className="mx-auto opacity-40 w-3/4"
      />
      <motion.p
        style={{ y: meshAnimation2 }}
        className="relative bottom-20 md:bottom-44 md:left-1/4 md:max-w-[80%] lg:bottom-20 lg:left-1/2 lg:w-1/2"
      >
        Many teams will choose Kusama for their dapp or parachain and
        remain exclusively on Kusama. Other teams will join Kusama as a
        temporary preparation ground for deployment on Polkadot.
      </motion.p>
    </motion.section>
  );
};

export default Canary;
