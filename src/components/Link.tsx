import React, { ReactNode } from 'react';

interface LinkTypes {
  href: string;
  classNames?: string;
  children: string | ReactNode;
}

const Link = ({ href, children, classNames }: LinkTypes) => {
  return (
    <a
      target="_blank"
      rel="noreferrer noopener nofollow"
      className={`${classNames}`}
      href={href}
    >
      {children}
    </a>
  );
};

export default Link;
