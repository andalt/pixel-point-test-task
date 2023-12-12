import { FC } from 'react';

import Link from 'components/shared/link';
import Button from 'components/shared/button';

const SubMenu: FC = () => (
  <>
    <Link
      className="flex items-center whitespace-nowrap py-1.5 px-1.5"
      theme="gray"
      size="md"
      to=""
    >
      Contact Sales
    </Link>
    <Button theme="white" size="sm">
      Book a Demo
    </Button>
  </>
);

export default SubMenu;
