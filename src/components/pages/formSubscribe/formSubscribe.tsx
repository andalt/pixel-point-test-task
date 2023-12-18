import { FC } from 'react';

import Button from 'components/shared/button';
import TextField from 'components/shared/text-field';
import Status from './status';

const FormSubscribe: FC = () => {
  return (
    <form className="max-w-[70.5%]">
      <div className="relative">
        <TextField size="sm" theme="primary" type="subscribe" />
        <Button
          className="absolute top-1.5 right-1.5 min-w-[168px]"
          theme="purple"
          size="md"
          aria-label="send email"
        >
          Free Trial
        </Button>
        <Status type="itle" />
      </div>
      <div className="hidden pt-3 pl-8 leading-tight tracking-tight text-secondary-4">
        Email is a required field
      </div>
    </form>
  );
};

export default FormSubscribe;
