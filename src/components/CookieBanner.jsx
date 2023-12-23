import { useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/use-local-storage.js';

import { AnimatePresence, motion } from 'framer-motion';
import { CookieModal } from './CookieModal.jsx';

import Button from './Button.jsx';

const CookieBanner = () => {
  const [value, setValue] = useLocalStorage('cookie-settings');
  const [isCookieBannerVisible, setIsCookieBannerVisible] =
    useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsCookieBannerVisible(value === null);
  }, [value]);

  return (
    <>
      {isCookieBannerVisible && (
        <AnimatePresence initial={false}>
          <motion.div
            className="pointer-events-none fixed inset-0 z-30 flex items-end px-4 sm:p-6"
            initial={{
              opacity: 0,
              translateY: '4rem',
            }}
            animate={{
              opacity: 1,
              translateY: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.4,
            }}
            aria-live="assertive"
          >
            <div className="pointer-events-auto fixed inset-x-0 bottom-0 bg-black px-8 ring-1 ring-gray/50">
              <div className="flex flex-col justify-between gap-x-8 gap-y-4 md:flex-row md:items-center">
                <p className="mt-1 max-w-[1100px] text-sm font-normal opacity-70 ">
                  This website uses Cookies.
                </p>
                <div className="mt-2 flex items-center gap-x-2">
                  <Button
                    varient="small"
                    onClick={() => {
                      setValue({
                        necessary: true,
                        functional: true,
                        performance: true,
                        marketing: true,
                      });
                    }}
                  >
                    Accept All
                  </Button>
                  <Button
                    varient="small"
                    onClick={() => {
                      setValue({
                        necessary: true,
                        functional: false,
                        performance: false,
                        marketing: false,
                      });
                    }}
                  >
                    Reject All
                  </Button>
                  <Button
                    varient="small"
                    onClick={() => setIsOpen(true)}
                  >
                    Manage
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
      <CookieModal
        closeModal={() => setIsOpen(false)}
        isOpen={isOpen}
      />
    </>
  );
};

export default CookieBanner;
