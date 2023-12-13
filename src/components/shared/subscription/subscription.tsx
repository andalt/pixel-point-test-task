import { FC } from 'react';

const Subscription: FC = () => {
  return (
    <div className="relative m-auto min-h-[685px] w-[464px] overflow-hidden">
      <div className="gradient-l-subscription absolute inset-0" />
      <div className="gradient-bl-subscription absolute inset-[-15px]" />

      <div className="absolute inset-0 rounded-[3px] border border-white opacity-40 mix-blend-overlay" />
      <div className="absolute inset-0 rounded-[3px] border border-white opacity-60 mix-blend-overlay" />

      <div className="absolute inset-[1px] p-7">
        <header>
          <img src="./subscription/logo.png" className="h-[22px] w-[104px] mix-blend-overlay" />
          <div className="font-sans text-xs font-normal leading-normal tracking-tight text-white mix-blend-overlay">
            Contract Start Date:
            <br />
            Contract End Date:
          </div>
        </header>
        <section></section>
        <footer></footer>
      </div>
    </div>
  );
};

export default Subscription;
