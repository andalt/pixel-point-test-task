import clsx from 'clsx';
import React, { ReactNode, FC, ButtonHTMLAttributes } from 'react';

import Link from 'components/shared/link';

const styles = {
  base: 'whitespace-nowrap rounded-[40px] font-semibold leading-none transition-colors duration-300 ease-[cubic-bezier(0.4, 0, 0.2, 1)] text-center',
  disabled: 'opacity-40 pointer-events-none',
  size: {
    sm: 'py-2.5 px-[18px]',
    md: 'py-4 px-5',
  },
  theme: {
    white: 'bg-gray-98 text-black hover:bg-gray-90 active:bg-gray-92',
    gray: 'bg-gray-90 text-black hover:bg-gray-94 active:bg-gray-92',
    purple: 'bg-primary-1 text-black hover:bg-primary-2/90 active:bg-primary-2',
  },
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: keyof typeof styles.size;
  to?: string;
  children: ReactNode;
  theme?: keyof typeof styles.theme;
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
    size && styles.size[size],
    theme && styles.theme[theme],
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
