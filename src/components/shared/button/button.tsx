import React, { ReactNode, FC } from 'react';
import clsx from 'clsx';

import Link from 'components/shared/link';

// Example of the code — https://user-images.githubusercontent.com/20713191/144215307-35538500-b9f0-486d-abed-1a14825bb75c.png
const styles = {
  // TODO: Add base styles
  base: 'whitespace-nowrap rounded-[40px] font-semibold leading-none transition-colors duration-300 ease-[cubic-bezier(0.4, 0, 0.2, 1)]',
  disabled: 'opacity-40 pointer-events-none',
  // TODO: Add sizes. Better to write down all sizes and go from higher to lower, e.g. "xl", "lg", "md", "sm", "xs"
  //       The name of the size cannot be lower than the font size that being used, e.g. "sm" size cannot have font-size "xs"
  //       Check out an example by a link above for better understanding
  size: {
    sm: 'py-2.5 px-[18px]',
  },
  // TODO: Add themes. Better to name the theme using this pattern: "${color-name}-${theme-type}", e.g. "black-filled"
  //       If there is no dividing between theme types, then feel free to use just color names, e.g. "black"
  //       Check out an example by a link above for better understanding
  theme: {
    white: 'bg-gray-98 text-black hover:bg-gray-90 active:bg-gray-92',
    gray: 'bg-gray-90 text-black hover:bg-gray-94 active:bg-gray-92',
  },
};

interface ButtonProps {
  className?: string;
  size?: string;
  to?: string;
  children: ReactNode;
  theme?: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  className: additionalClassName,
  to,
  size,
  theme,
  disabled,
  children,
  ...otherProps
}) => {
  const className = clsx(
    styles.base,
    styles.size[size],
    styles.theme[theme],
    disabled && styles.disabled,
    additionalClassName
  );

  const Tag = to ? Link : 'button';

  return (
    <Tag className={className} to={to} {...otherProps}>
      {children}
    </Tag>
  );
};

export default Button;
