import React, { useState, ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface FaqItemTypes {
  title: string;
  content: ReactNode;
}

const FaqItem = ({ title, content }: FaqItemTypes) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandItem = () => {
    setIsExpanded(IsExpanded => !IsExpanded);
  };

  return (
    <div>
      <button
        className="w-3/4 border-b-[1px] border-gray/10"
        onClick={handleExpandItem}
        id={title}
        aria-expanded={isExpanded ? 'true' : 'false'}
      >
        <p className="text-left text-sm text-pink">{title}</p>
      </button>
      <div>
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              key="accordion"
              className="overflow-hidden pt-4"
              initial={{
                opacity: 0,
                height: '0px',
              }}
              animate={{
                opacity: 1,
                height: 'auto',
              }}
              exit={{
                opacity: 0,
                height: '0px',
              }}
              transition={{
                duration: 0.6,
              }}
              role="region"
              aria-labelledby={title}
            >
              <div className="relative overflow-hidden text-white">
                {content}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FaqItem;
