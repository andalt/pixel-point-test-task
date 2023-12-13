import Subscription from 'components/shared/subscription';
import { FC } from 'react';

const Home: FC = () => (
  <div className="container">
    <div className="grid grid-cols-2 gap-10 pt-24 lg:grid-cols-1">
      <section className="mt-[120px]">
        <div className="relative">
          <div className="absolute bottom-9 top-auto left-0 right-0 -z-10 rounded-full bg-primary-1 pb-[100%] opacity-[0.15] blur-[200px]" />
          <h1 className="mb-7">Unlock valuable insights from subscription data</h1>
        </div>
        <p className="subtitle mb-10">
          Analyze your subscription ecosystem for cost optimization and risk management
        </p>
      </section>
      <section>
        <Subscription />
      </section>
    </div>
  </div>
);

export default Home;
