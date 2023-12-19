import clsx from 'clsx';
import NextLink from 'next/link';
import React, { FC, ReactNode } from 'react';

const baseStyles = {
  base: 'opacity-90 transition-opacity hover:opacity-70 active:opacity-100',
  variant: {
    header: 'whitespace-nowrap py-1.5 px-1.5',
  },
  size: {
    md: 'font-medium',
  },
  theme: {
    gray: 'text-gray-98',
    black: 'text-black',
  },
};

interface LinkProps {
  className?: string;
  size?: keyof typeof baseStyles.size;
  to?: string;
  children: ReactNode;
  theme?: keyof typeof baseStyles.theme;
  variant?: keyof typeof baseStyles.variant;
}

const Link: FC<LinkProps> = ({
  className: additionalClassName,
  to,
  children,
  theme,
  size,
  variant,
  ...props
}) => {
  const className = clsx(
    theme && baseStyles.base,
    variant && baseStyles.variant[variant],
    size && baseStyles.size[size],
    theme && baseStyles.theme[theme],
    additionalClassName
  );

  if (to && to.startsWith('/')) {
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
