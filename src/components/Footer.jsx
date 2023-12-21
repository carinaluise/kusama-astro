import { useState } from 'react';
import { CookieModal } from './CookieModal';

import footerRoutes from '../data/components/footer';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <footer className="px-4 mt-4 bg-black z-50">
        <nav className="mx-auto w-fit">
          <div className="w-full py-2 flex flex-wrap gap-x-16">
            {footerRoutes.map((menu) => (
              <ul
                key={menu.title}
                className="mb-8"
              >
                <h5 className="mb-4">{menu.title}</h5>
                {menu.items.map((item) => (
                  <li
                    key={item.title}
                    className="max-w-[20vh] sm:max-w-[12vh] md:max-w-[16ch] lg:max-w-full text-sm mb-2 opacity-50"
                  >
                    <a href={item.link}>{item.title}</a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <ul className="max-w-full mt-4 mb-8 text-[10px] flex justify-center gap-2">
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
