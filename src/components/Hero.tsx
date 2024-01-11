import React, {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import Button from './Button';

const Hero = () => {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [150, 500, 700], [1, 4, 0]);
  const opacity = useTransform(scrollY, [150, 500], [1, 0]);
  const scale2 = useTransform(scrollY, [690, 700], [1, 0]);

  return (
    <div className="max-w-screen flex h-screen items-center justify-center overflow-hidden pb-56">
      <motion.div
        style={{
          scale: scale2,
          position: 'fixed',
        }}
      >
        <motion.div
          style={{ opacity, scale }}
          className="overflow-hidden text-white"
        >
          <img
            className=""
            src={`/images/kusama.gif`}
            alt="Kusama GIF"
          />
          <h1 className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform text-center font-mono text-[30px] lg:text-[55px]">
            PARACHAINS ARE HERE
          </h1>
          <a
            className="top-100% absolute left-1/2 -translate-x-1/2 -translate-y-1/2 transform md:top-[90%]"
            href="/parachains"
          >
            <Button>Learn more</Button>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
