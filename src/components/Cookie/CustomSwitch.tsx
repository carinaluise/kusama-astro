import React, { ReactNode } from 'react';
import { Switch } from '@headlessui/react';
import cx from 'classnames';

interface CustomSwitchTypes {
  label: string;
  description: string;
  onChange: () => void;
  checked: boolean;
  disabled?: boolean;
}

interface CustomSwitchWrapperTypes {
  tabIndex: number;
  role: string;
  'aria-label': string;
  disabled: boolean;
  checked: boolean;
  onChange: () => void;
  className: string;
  children: ReactNode;
}

const SwitchWrapper = ({
  children,
  ...props
}: CustomSwitchWrapperTypes) => {
  return <Switch {...props}>{children}</Switch>;
};

const CustomSwitch = ({
  label,
  description,
  onChange,
  checked,
  disabled = false,
}: CustomSwitchTypes) => {
  return (
    <div className="mb-4 flex align-middle">
      <SwitchWrapper
        tabIndex={0}
        role="switch"
        aria-label="Enable/Disable"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        className={cx(
          'focus:ring- relative mr-4 mt-1 inline-flex h-5 w-10 flex-shrink-0 cursor-pointer transition-colors duration-200 ease-in-out focus:ring-2',
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
      </SwitchWrapper>
      <div>
        <span className="font-bold">{label}</span>
        <p className="mb-1 mt-0 text-xs text-white">{description}</p>
      </div>
    </div>
  );
};

export default CustomSwitch;
