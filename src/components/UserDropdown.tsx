'use client';
import React from 'react';
import { createPopper } from '@popperjs/core';
import type { StrictModifiers, VirtualElement } from '@popperjs/core';
import { usePopper } from 'react-popper';
import Image from 'next/image';
import Link from 'next/link';

const UserDropdown = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.useRef<HTMLAnchorElement>(null);

  const popoverDropdownRef = React.useRef<HTMLDivElement>(null);
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current!, popoverDropdownRef.current!, {
      placement: 'bottom-end',
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <Link
        className="text-blueGray-500 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <Image
              alt="..."
              width={200}
              height={200}
              className="w-full rounded-full align-middle border-none shadow-lg"
              src="/team-1-800x800.jpg"
            />
          </span>
        </div>
      </Link>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? 'block ' : 'hidden ') +
          'bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1'
        }
        style={{ minWidth: '12rem' }}
      >
        <a
          href="#pablo"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
          }
          onClick={(e) => e.preventDefault()}
        >
          Action
        </a>
        <a
          href="#pablo"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
          }
          onClick={(e) => e.preventDefault()}
        >
          Another action
        </a>
        <a
          href="#pablo"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
          }
          onClick={(e) => e.preventDefault()}
        >
          Something else here
        </a>
        <div className="h-0 my-2 border border-solid border-blueGray-100" />
        <a
          href="#pablo"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
          }
          onClick={(e) => e.preventDefault()}
        >
          Seprated link
        </a>
      </div>
    </>
  );
};

export default UserDropdown;
