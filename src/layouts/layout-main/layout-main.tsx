import React, { FC, ReactNode } from 'react';

import Header from 'components/shared/header';
import SEO from 'components/shared/seo';

const LayoutMain: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <SEO />
      <Header />
      <main className="pb-20">{children}</main>
    </>
  );
};

export default LayoutMain;
