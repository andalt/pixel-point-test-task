import { FC } from 'react';

const terms = [
  {
    name: 'Contract Start Date:',
    value: '7/30/2022',
  },
  {
    name: 'Billing Terms:',
    value: 'Net 45',
  },
  {
    name: 'Contract End Date:',
    value: '7/29/2023',
  },
  {
    name: 'Billing Frequency:',
    value: 'Annually',
  },
];

const services = {
  head: ['Services', 'Qty', 'Annual Price'],
  body: [
    {
      services: 'Enterprise Subscription',
      qty: '25',
      annualPrice: '$100,000',
    },
    {
      services: 'Lite Access Users - Subscription',
      qty: '350',
      annualPrice: '$35,000',
    },
    {
      services: 'Sandbox - Test Tenants',
      qty: '3',
      annualPrice: 'included',
    },
    {
      services: 'Custom API Integrations',
      qty: '2',
      annualPrice: '$20,000',
    },

    {
      services: 'Enterprise API Integrations',
      qty: 'all',
      annualPrice: 'included',
    },
    {
      services: 'Delivery and Pro Services',
      qty: '1',
      annualPrice: '$50,000',
    },
    {
      services: 'Managed Services',
      qty: '1',
      annualPrice: '$50,000',
    },
    {
      services: 'Contract A1 Service',
      qty: '800',
      annualPrice: '$50,000',
    },
    {
      services: 'Sandbox - Test Tenants',
      qty: '3',
      annualPrice: 'included',
    },
  ],
};

const SubscriptionContent: FC = () => {
  return (
    <div className="absolute inset-[1px] p-7 pb-[22px]">
      <header className="mb-6">
        <img
          src="./subscription/logo.png"
          className="mix-blend-custom-overlay mb-3.5 h-[22px] w-[104px]"
        />
        <div className="mix-blend-custom-overlay grid grid-cols-2 grid-rows-3 gap-x-9 gap-y-1 border-y py-5 text-xs leading-normal tracking-tight">
          <div>Acme Software Co.</div>
          <div>Wasatch Cloud Inc.</div>
          <div>50 E Rio Grande Pkwy</div>
          <div>18560 West Sunset Blvd.</div>
          <div>Tempe, AZ 85281 United States</div>
          <div>LOS Angeles, CA 90046 US</div>
        </div>
      </header>
      <section>
        <div className="mb-3.5 text-[11px] font-medium uppercase leading-[11px] tracking-wide opacity-90">
          Subscription Terms
        </div>
        <div className="mb-5 grid grid-cols-2 grid-rows-2 gap-x-9 gap-y-1 text-xs leading-normal tracking-tight">
          {terms.map((item, index) => (
            <div key={index}>
              <dl className="flex gap-2">
                <dt className="mix-blend-custom-overlay basis-28">{item.name}</dt>
                <dd className="font-medium opacity-90">{item.value}</dd>
              </dl>
            </div>
          ))}
        </div>
        <div className="before:mix-blend-custom-overlay relative overflow-hidden rounded p-[1px] before:absolute before:inset-0 before:rounded before:border before:border-white before:content-['']">
          <table className="table w-full border-collapse border-spacing-0">
            <thead className="table-header-group">
              <tr className="table-row align-middle">
                {services.head.map((item, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="mix-blend-custom-overlay relative table-cell bg-white/30 px-3.5 pt-3 pb-2.5 text-left text-[10px] font-medium uppercase leading-[10px] tracking-tight first-of-type:rounded-tl-[3px] last-of-type:rounded-tr-[3px]"
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="subscription-tbody">
              {services.body.map((item, index) => (
                <tr key={index} className="table-row align-middle">
                  <th
                    scope="row"
                    className="subscription-tbody-td mix-blend-custom-overlay w-[51%]"
                  >
                    {item.services}
                    <span className="absolute inset-0" />
                  </th>
                  <td className="subscription-tbody-td w-[23%] text-white/90">
                    <span className="absolute inset-0" />
                    {item.qty}
                  </td>
                  <td className="subscription-tbody-td w-auto text-white/90">
                    {item.annualPrice}
                    <span className="absolute inset-0" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <footer className="grid grid-cols-2 grid-rows-1 items-center gap-x-9 pt-[22px]">
        <div>
          <img
            src="./subscription/signature.png"
            className="mix-blend-custom-overlay h-[36px] w-[126px]"
          />
        </div>
        <div>
          <dl className="flex items-center gap-3.5">
            <dt className="mix-blend-custom-overlay text-sm leading-[14px]">1-year Total:</dt>
            <dd className="text-sm font-medium leading-[14px] opacity-90">$255,000</dd>
          </dl>
        </div>
      </footer>
    </div>
  );
};

export default SubscriptionContent;
