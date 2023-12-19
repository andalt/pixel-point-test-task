import { FC } from 'react';

const data = [
  {
    logo: '3x',
    heading: 'Faster Analysis Cycles',
    content:
      'Stop the tedium of manual subscription data review. Quickly access essential information from all subscriptions.',
  },
  {
    logo: '10%+',
    heading: 'Savings on Costs',
    content:
      'Insights into both subscription data and expenditure lead to rapid, smart cost-cutting strategies.',
  },
  {
    logo: '30',
    heading: 'Day Setup',
    content:
      'Implement swiftly with straightforward, no-code processes and ready-to-use integrations.',
  },
];

const Benefits: FC = () => (
  <section className="grid grid-cols-3 justify-between gap-10 lg:grid-cols-1">
    {data.map((item, index) => (
      <div key={index}>
        <div className="logo relative mb-3.5">
          {item.logo}
          <span className="absolute inset-[-100px] z-[-1] bg-[url('/benefits/logo-ellipse.svg')] bg-contain bg-no-repeat" />
        </div>
        <h3 className="mb-8">{item.heading}</h3>
        <div className="text-zinc-100 w-[73%] border-t border-white/10 pt-8 text-lg font-light leading-[27px] tracking-tight text-gray-94">
          {item.content}
        </div>
      </div>
    ))}
  </section>
);

export default Benefits;
