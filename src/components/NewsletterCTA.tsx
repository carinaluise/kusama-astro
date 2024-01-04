import React, { useState } from 'react';
import HubspotForm from 'react-hubspot-form';
import Modal from './Modal';
import Button from './Button';

const NewsletterCTA = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <aside className="mx-auto text-center lg:w-[40%]">
      <h3 className="mb-4 text-2xl">Stay in the Loop</h3>
      <p className="text-sm">
        NewsletterCTA to the newsletter to hear about Kusama updates
        and events.
      </p>
      <Button onClick={() => setIsOpen(true)}>Subscribe</Button>
      <p className="text-[10px] opacity-60">
        To see how we use your information please see our privacy
        policy.
      </p>
      <Modal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      >
        <div>
          <HubspotForm
            portalId="7592558"
            formId="f4e0ded8-88d1-450d-a490-10bd202050a1"
            onSubmit={() => setIsOpen(false)}
            loading={<div>Loading...</div>}
          />
        </div>
      </Modal>
    </aside>
  );
};

export default NewsletterCTA;
