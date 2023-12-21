import { useState } from 'react';
import AccordionItem from './AccordionItem';

import FAQData from '../data/components/faq';

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('Parachains');

  const handleTabClick = (categoryName) => {
    setActiveTab(categoryName);
  };

  return (
    <div className="md:w-3/4 mx-auto my-24">
      <h2 className="mb-8">FAQ</h2>
      <div className="flex">
        {FAQData.map((faq) => (
          <div key={faq.category}>
            <button
              className={`mr-8 pb-0 mb-4 ${
                activeTab === faq.category
                  ? 'border-b-2 border-pink'
                  : ''
              }`}
              onClick={() => handleTabClick(faq.category)}
            >
              <h5 className="mb-2">{faq.category}</h5>
            </button>
          </div>
        ))}
      </div>
      <div>
        {FAQData.find((item) => item.category === activeTab).items.map(
          (item) => (
            <AccordionItem
              key={item.question}
              client:load
              title={item.question}
              content={item.answer}
            />
          )
        )}
      </div>
    </div>
  );
};

export default FAQ;
