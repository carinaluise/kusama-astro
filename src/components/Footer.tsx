import React, { useState } from 'react';
import { CookieModal } from './Cookie/CookieModal';

import footerRoutes from '../data/components/footer';

const Footer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <footer className="z-50 mt-4 bg-black px-4">
        <nav className="mx-auto w-fit">
          <div className="flex w-full flex-wrap gap-x-8 px-2 py-2 sm:gap-x-16">
            {footerRoutes.map(menu => (
              <ul
                key={menu.title}
                className="mb-8"
              >
                <h5 className="mb-4">{menu.title}</h5>
                {menu.items.map(
                  (item: { title: string; link: string }) => (
                    <li
                      key={item.title}
                      className="mb-2 max-w-[20vh] text-xs opacity-50 sm:max-w-[12vh] md:max-w-[16ch] lg:max-w-full"
                    >
                      <a href={item.link}>{item.title}</a>
                    </li>
                  )
                )}
              </ul>
            ))}
          </div>
          <ul className="mb-8 mt-4 flex max-w-full flex-wrap justify-center gap-2 text-[10px]">
            <li className="opacity-50">© 2023 Kusama</li>
            <span>·</span>
            <li>
              <a href="/legal-disclosures">Legal Disclosures</a>
            </li>
            <span>·</span>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <span>·</span>
            <li>
              <a href="/disclaimer">Disclaimer</a>
            </li>
            <span>·</span>
            <li>
              <button onClick={() => setIsOpen(true)}>
                Cookie Settings
              </button>
            </li>
          </ul>
        </nav>
      </footer>
      <CookieModal
        closeModal={() => setIsOpen(false)}
        isOpen={isOpen}
      />
    </>
  );
};

export default Footer;
