import { FC, ReactNode } from 'react';

import LayoutMain from 'layouts/layout-main';
import 'styles/main.css';

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <html lang="en">
    <head />
    <body>
      <div className="relative h-screen overflow-x-hidden">
        <LayoutMain>{children}</LayoutMain>
      </div>
    </body>
  </html>
);

export default RootLayout;
