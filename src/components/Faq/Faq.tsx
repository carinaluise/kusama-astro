import React, { useState } from 'react';
import FaqItem from './FaqItem';

import FAQData from '../../data/components/faq';

const Faq = () => {
  const [activeTab, setActiveTab] = useState<string>('Parachains');

  const handleTabClick = (categoryName: string) => {
    setActiveTab(categoryName);
  };

  return (
    <div className="mx-auto my-24 lg:flex lg:w-3/4 lg:flex-col xl:w-1/2">
      <h2 className="mb-8">FAQ</h2>
      <div className="flex flex-wrap">
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
        {FAQData.map(
          category =>
            category.category == activeTab &&
            category.items.map(item => (
              <FaqItem
                key={item.question}
                title={item.question}
                content={item.answer}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default Faq;
