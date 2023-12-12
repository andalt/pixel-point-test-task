import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, FC } from 'react';

import { links } from '../header/header';
import Link from 'components/shared/link';
import ArrowBottom from 'icons/arrow-bottom.inline.svg';

const ANIMATION_DURATION = 0.2;

const variants = {
  from: {
    opacity: 0,
    translateY: 30,
    transition: {
      duration: ANIMATION_DURATION,
    },
    transitionEnd: {
      zIndex: -1,
      display: 'none',
    },
  },
  to: {
    zIndex: 999,
    opacity: 1,
    translateY: 0,
    display: 'block',
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
};

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      controls.start('to');
    } else {
      controls.start('from');
    }
  }, [isOpen, controls]);

  return (
    <motion.div
      className="absolute right-8 left-8 top-16 z-[-1] hidden rounded-md bg-white px-8 pt-4 pb-7 text-black shadow-[0_10px_20px_rgba(153,102,255,0.3)] lg:block md:right-4 md:left-4"
      initial="from"
      animate={controls}
      variants={variants}
    >
      <ul className="">
        {links.map(({ text, to, isSubMenu }, index) => (
          <li key={index}>
            <Link
              className="flex items-center justify-center whitespace-nowrap py-1.5 px-1.5"
              to={to}
              theme="black"
            >
              <span className="relative flex items-center">
                {text}
                {isSubMenu && (
                  <ArrowBottom className="absolute left-full ml-1 h-3 w-3 stroke-black" />
                )}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {/* TODO: Add a button if needed */}
    </motion.div>
  );
};

export default MobileMenu;
