import { useState, useEffect } from 'react';
import cx from 'classnames';

import { Switch } from '@headlessui/react';
import { useLocalStorage } from '../hooks/use-local-storage.js';

import Modal from './Modal.jsx';
import Button from './Button.jsx';
import toggleData from '../data/components/cookieToggles';

const Toggle = ({
  label,
  description,
  onChange,
  checked,
  disabled = false,
}) => {
  return (
    <div className="flex align-middle mb-4">
      <Switch
        tabIndex={0}
        role="switch"
        aria-label="Enable/Disable"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        className={cx(
          'relative mt-1 mr-4 inline-flex h-5 w-10 flex-shrink-0 cursor-pointer transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-',
          checked === true && !disabled ? 'bg-pink' : 'bg-gray',
          { 'cursor-default': disabled }
        )}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={cx(
            checked === true ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 transform  bg-white shadow ring-0 transition duration-200 ease-in-out'
          )}
        />
      </Switch>
      <div>
        <span className="font-bold">{label}</span>
        <p className="mb-1 mt-0 text-xs text-white">{description}</p>
      </div>
    </div>
  );
};

const CookieModal = ({ closeModal, isOpen }) => {
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

  const handleToggleChange = (toggleName) => {
    setToggleValues((prevValues) => ({
      ...prevValues,
      [toggleName]: !prevValues[toggleName],
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
        <h3 className="mb-9 text-white text-center leading-snug md:px-6 ">
          Cookie Settings
        </h3>
        {toggleData.map(({ label, description, required, key }) => {
          return (
            <div key={label}>
              <Toggle
                required={required}
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
