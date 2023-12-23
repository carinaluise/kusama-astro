import { useState } from 'react';
import AccordionItem from './AccordionItem';

import FAQData from '../data/components/faq';

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('Parachains');

  const handleTabClick = categoryName => {
    setActiveTab(categoryName);
  };

  return (
    <div className="mx-auto my-24 md:w-3/4">
      <h2 className="mb-8">FAQ</h2>
      <div className="flex">
        {FAQData.map(faq => (
          <div key={faq.category}>
            <button
              className={`mb-4 mr-8 pb-0 ${
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
        {FAQData.find(item => item.category === activeTab).items.map(
          item => (
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
