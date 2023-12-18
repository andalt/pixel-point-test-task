'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import Button from 'components/shared/button';
import TextField from 'components/shared/text-field';

import Status from './status';

const validationSchema = yup.object({
  email: yup
    .string()
    .required('Email is a required field')
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Email is a required field'
    ),
});

export type StatusForm = 'idle' | 'loading' | 'success' | 'error';

const FormSubscribe: FC = () => {
  const [status, setStatus] = useState<StatusForm>('idle');

  const {
    register,
    handleSubmit,
    resetField,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const onSubmit = (data: { email: string }) => {
    setStatus('loading');

    new Promise((resolve) => {
      setTimeout(() => {
        if (data.email === 'error@gmail.com') {
          resolve(data.email);
          setStatus('error');
          setValue('email', 'Oops! Something went wrong');
        } else {
          resolve(data.email);
          setStatus('success');
        }
      }, 3000);
    }).then(() => {
      setTimeout(() => {
        resetField('email');
        setStatus('idle');
      }, 3000);
    });
  };

  return (
    <form className="max-w-[70.5%]" noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className="relative">
        <TextField
          size="sm"
          theme="primary"
          type="subscribe"
          inputType="email"
          placeholder="Your business email..."
          disabled={status !== 'idle'}
          {...register('email')}
        />
        {status === 'idle' && (
          <Button
            className="absolute top-1.5 right-1.5 min-w-[168px]"
            theme="purple"
            size="md"
            aria-label="send email"
          >
            Free Trial
          </Button>
        )}
        <Status type={status} />
      </div>
      <div className="pt-3 pl-8 leading-tight tracking-tight text-secondary-4">
        {errors.email?.message}
      </div>
    </form>
  );
};

export default FormSubscribe;
