import React, { useState, useEffect } from 'react';
import { useLocalStorage } from '../../hooks/use-local-storage.js';

import Modal from '../Modal.js';
import Button from '../Button.js';
import toggleData from '../../data/components/cookieToggles';

import SwitchWrapper from './CustomSwitch';

interface CookieModalTypes {
  closeModal: () => void;
  isOpen: boolean;
}

interface ToggleValueTypes {
  necessary: string;
  functional: string;
  performance: string;
  marketing: string;
}

const CookieModal = ({ closeModal, isOpen }: CookieModalTypes) => {
  const [cookieSettings, setCookieSettings] =
    useLocalStorage('cookie-settings');

  const defaultSettings = {
    necessary: true,
    functional: false,
    performance: false,
    marketing: false,
  };

  const [toggleValues, setToggleValues] = useState(
    cookieSettings === null ? defaultSettings : cookieSettings
  );

  useEffect(() => {
    cookieSettings === null
      ? setToggleValues({
          necessary: true,
          functional: false,
          performance: false,
          marketing: false,
        })
      : setToggleValues(cookieSettings);
  }, [isOpen, cookieSettings]);

  const handleToggleChange = (toggleName: string) => {
    setToggleValues((prevValues: ToggleValueTypes) => ({
      ...prevValues,
      [toggleName]:
        !prevValues[toggleName as keyof typeof prevValues],
    }));
  };

  const handleSave = () => {
    setCookieSettings(toggleValues);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <div>
        <h3 className="mb-9 text-center leading-snug text-white md:px-6 ">
          Cookie Settings
        </h3>
        {toggleData.map(({ label, description, required, key }) => {
          return (
            <div key={label}>
              <SwitchWrapper
                description={description}
                label={label}
                onChange={() => handleToggleChange(key)}
                checked={toggleValues[key]}
                disabled={required === true}
              />
            </div>
          );
        })}
        <div className="text-center">
          <Button onClick={handleSave}>Save</Button>
        </div>
      </div>
    </Modal>
  );
};

export { CookieModal };
