import { FC } from 'react';

import clsx from 'clsx';

import Check from 'icons/check.inline.svg';
import Close from 'icons/close.inline.svg';

import { StatusForm } from './formSubscribe';

const styles = {
  base: 'absolute w-12 h-12 rounded-full top-1.5 right-1.5',
};

interface StatusProps {
  type: StatusForm;
}

const Status: FC<StatusProps> = ({ type }) => {
  if (type === 'loading') {
    return (
      <div className={clsx(styles.base, 'flex bg-primary-1')}>
        <span className="m-auto box-border flex h-[30px] w-[30px] animate-spin rounded-full border-[4px] border-solid border-[#BB99FF] border-b-white" />
      </div>
    );
  }

  if (type === 'error') {
    return (
      <div className={clsx(styles.base, 'flex bg-primary-2')}>
        <Close className="m-auto flex h-3.5 w-3.5" />
      </div>
    );
  }

  if (type === 'success') {
    return (
      <div className={clsx(styles.base, 'flex bg-secondary-1')}>
        <Check className="m-auto flex h-5 w-5" />
      </div>
    );
  }

  return null;
};

export default Status;
