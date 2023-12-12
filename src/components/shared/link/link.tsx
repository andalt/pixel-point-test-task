/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import NextLink from 'next/link';
import React, { FC, ReactNode } from 'react';

// Example of the code — https://user-images.githubusercontent.com/20713191/144221096-1939c382-4ab8-4d28-b0e6-7bbe3a8f8556.png
const baseStyles = {
  // TODO: Add base styles
  base: 'opacity-90 transition-opacity hover:opacity-70 active:opacity-100',
  // TODO: Add sizes. Better to write down all sizes and go from higher to lower, e.g. "xl", "lg", "md", "sm", "xs"
  //       The name of the size cannot be lower than the font size that being used, e.g. "sm" size cannot have font-size "xs"
  //       Check out an example by a link above for better understanding
  size: {
    md: 'font-medium',
  },
  // TODO: Add themes. Better to name the theme using this pattern: "${color-name}-${theme-type}", e.g. "black-filled"
  //       If there is no dividing between theme types, then feel free to use just color names, e.g. "black"
  //       Check out an example by a link above for better understanding
  theme: {
    gray: 'text-gray-98',
    black: 'text-black',
  },
};

interface LinkProps {
  className: string;
  size?: string;
  to: string;
  children: ReactNode;
  theme?: string;
}

const Link: FC<LinkProps> = ({
  className: additionalClassName,
  to,
  children,
  theme,
  size,
  ...props
}) => {
  const className = clsx(
    theme && baseStyles.base,
    baseStyles.size[size],
    baseStyles.theme[theme],
    additionalClassName
  );

  if (to.startsWith('/')) {
    return (
      <NextLink className={className} href={to} {...props}>
        {children}
      </NextLink>
    );
  }

  return (
    <a className={className} href={to} {...props}>
      {children}
    </a>
  );
};

export default Link;
