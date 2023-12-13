import React, { FC } from 'react';
import { Squash as Hamburger } from 'hamburger-react';

import Link from 'components/shared/link';
import ArrowBottom from 'icons/arrow-bottom.inline.svg';
import Button from 'components/shared/button';

interface HeaderProps {
  isMobileMenuOpen: boolean;
  onBurgerClick: () => void;
}

export const links = [
  {
    text: 'Integrations',
    to: '/integrations',
  },
  {
    text: 'Core Platform',
    to: '/core-platform',
    isSubMenu: true,
  },
  {
    text: 'Company',
    to: '/company',
    isSubMenu: true,
  },
  {
    text: 'Resources',
    to: '/resources',
    isSubMenu: true,
  },
];

const Header: FC<HeaderProps> = ({ isMobileMenuOpen, onBurgerClick }) => (
  <header className="safe-paddings min-h-[64px]">
    <div className="container flex items-center justify-between pb-3.5 pt-3.5">
      <nav className="flex w-full justify-center lg:hidden">
        <ul className="flex gap-x-3.5 text-center">
          {links.map(({ text, to, isSubMenu }, index) => (
            <li key={index}>
              <Link
                className="flex items-center whitespace-nowrap py-1.5 px-1.5"
                theme="gray"
                type="header"
                to={to}
              >
                {text}
                {isSubMenu && <ArrowBottom className="ml-1 h-3 w-3 stroke-gray-98" />}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="absolute right-10 flex items-center gap-x-3.5 lg:hidden">
        <Link theme="gray" size="md" type="header" to="">
          Contact Sales
        </Link>
        <Button theme="white" size="sm">
          Book a Demo
        </Button>
      </div>
      <div className="absolute right-5 top-2 hidden lg:block">
        <Hamburger duration={0.2} toggled={isMobileMenuOpen} size={20} toggle={onBurgerClick} />
      </div>
    </div>
  </header>
);

export default Header;
