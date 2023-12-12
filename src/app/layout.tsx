import { FC, ReactNode } from 'react';

import LayoutMain from 'layouts/layout-main';
import 'styles/main.css';

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <html lang="en">
    <head />
    <body>
      <LayoutMain>{children}</LayoutMain>
    </body>
  </html>
);

export default RootLayout;
