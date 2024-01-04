import React, { ReactNode } from 'react';
import cx from 'classnames';

type Variant = 'default' | 'white' | 'small';

interface ButtonTypes {
  variant?: Variant;
  onClick?: (() => void) | undefined;
  children: string | ReactNode;
}

const Button = ({
  variant = 'default',
  onClick,
  children,
}: ButtonTypes) => {
  return (
    <button
      onClick={onClick}
      className={cx(
        'my-4 border-2 px-4 py-2 hover:border-turqoise hover:text-turqoise',
        {
          'border-pink text-pink ': variant === 'default',
        },
        {
          'border-white text-white': variant === 'white',
        },
        {
          'border-pink text-xs tracking-tight text-pink':
            variant === 'small',
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
