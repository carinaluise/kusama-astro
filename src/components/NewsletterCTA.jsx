import { useState } from 'react';
import HubspotForm from 'react-hubspot-form';
import Modal from './Modal';
import Button from './Button';

const NewsletterCTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <aside class="lg:w-[40%] text-center mx-auto">
      <h3 class="text-2xl mb-4">Stay in the Loop</h3>
      <p class="text-sm">
        NewsletterCTA to the newsletter to hear about Kusama updates and
        events.
      </p>
      <Button onClick={() => setIsOpen(true)}>Subscribe</Button>
      <p class="text-[10px] opacity-60">
        To see how we use your information please see our privacy
        policy.
      </p>
      <Modal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      >
        <HubspotForm
          portalId="7592558"
          formId="f4e0ded8-88d1-450d-a490-10bd202050a1"
          onSubmit={() => setIsOpen(false)}
          onReady={(form) => console.log('Form ready!')}
          loading={<div>Loading...</div>}
        />
      </Modal>
    </aside>
  );
};

export default NewsletterCTA;
