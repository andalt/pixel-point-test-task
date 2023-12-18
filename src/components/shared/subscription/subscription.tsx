import { FC } from 'react';

import SubscriptionContent from './subscription-content';

const Subscription: FC = () => {
  return (
    <div className="relative m-auto min-h-[685px] w-[464px]">
      <div className="mix-blend-custom-overlay absolute top-[33px] bottom-0 left-[-126px] right-[-126px] bg-[url('/subscription/mockups.png')] bg-cover bg-center" />
      <div className="absolute top-[-106px] bottom-[-106px] left-[-208px] right-[-208px] bg-[url('/subscription/background-blur.png')] bg-cover bg-center" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="subscription-gradient absolute inset-[-15px]" />
        <div className="subscription-background absolute inset-0" />

        <div className="mix-blend-custom-overlay absolute inset-0 rounded-[3px] border border-white opacity-40" />
        <div className="mix-blend-custom-overlay absolute inset-0 rounded-[3px] border border-white opacity-60" />

        <SubscriptionContent />
      </div>
    </div>
  );
};

export default Subscription;
