import { FC } from 'react';

import Benefits from 'components/pages/benefits';
import Subscription from 'components/pages/subscription';
import FormSubscribe from 'components/pages/formSubscribe';

const Home: FC = () => (
  <div className="container">
    <section className="mb-[120px] grid grid-cols-2 gap-10 pt-24 lg:grid-cols-1">
      <section className="mt-[120px]">
        <div className="relative">
          <div className="absolute bottom-9 top-auto left-0 right-0 z-[1] rounded-full bg-primary-1 pb-[100%] opacity-[0.15] blur-[200px]" />
          <h1 className="relative z-[2] mb-7">Unlock valuable insights from subscription data</h1>
        </div>
        <p className="subtitle mb-10">
          Analyze your subscription ecosystem for cost optimization and risk management
        </p>
        <FormSubscribe />
      </section>
      <section>
        <Subscription />
      </section>
    </section>
    <Benefits />
  </div>
);

export default Home;
