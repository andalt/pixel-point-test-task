import clsx from 'clsx';
import React, { FC, forwardRef } from 'react';

const styles = {
  base: 'relative rounded-[40px]',
  disabled: 'pointer-events-none',
  size: {
    sm: 'px-8 py-1.5',
  },
  type: {
    subscribe: 'pr-[200px]',
  },
  theme: {
    primary: 'text-field-primary',
  },
};

interface TextFieldProps {
  className?: string;
  size?: keyof typeof styles.size;
  theme?: keyof typeof styles.theme;
  type?: keyof typeof styles.type;
  disabled?: boolean;
  inputType: string;
  placeholder: string;
}

const TextField: FC<TextFieldProps> = forwardRef(function TextFieldComponent(
  {
    className: additionalClassName,
    size,
    theme,
    type,
    disabled,
    inputType = 'text',
    placeholder,
    ...otherProps
  },
  ref: any
) {
  const className = clsx(
    styles.base,
    size && styles.size[size],
    theme && styles.theme[theme],
    type && styles.type[type],
    disabled && styles.disabled,
    additionalClassName
  );

  return (
    <div className={className}>
      <input
        ref={ref}
        placeholder={placeholder}
        type={inputType}
        aria-label={inputType}
        className="text-fuchsia-200 box-content block h-[39px] w-full min-w-0 border-0 bg-transparent px-0 pt-1 pb-[5px] font-sans font-light leading-tight tracking-tight opacity-80 outline-none focus:outline-none"
        {...otherProps}
      />
    </div>
  );
});

export default TextField;
