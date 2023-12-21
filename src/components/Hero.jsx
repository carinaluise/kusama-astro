import { motion, useScroll, useTransform } from 'framer-motion';
import Button from './Button';

const Hero = () => {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [150, 500, 700], [1, 4, 0]);
  const opacity = useTransform(scrollY, [150, 500], [1, 0]);
  const scale2 = useTransform(scrollY, [690, 700], [1, 0]);

  return (
    <div className="pb-56 overflow-hidden max-w-screen h-screen flex justify-center items-center">
      <motion.div style={{ scale: scale2, position: 'fixed' }}>
        <motion.div
          style={{ opacity, scale }}
          className="overflow-hidden text-white"
        >
          <img
            className=""
            src={`/images/kusama.gif`}
            alt="Kusama GIF"
          />
          <h1 className=" w-full text-center font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            PARACHAINS ARE HERE
          </h1>
          <a
            className="absolute top-100% md:top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
