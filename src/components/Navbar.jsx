import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineShoppingCart,
  AiOutlineContacts,
} from 'react-icons/ai';

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className='flex justify-between items-center p-4 lg:px-12 bg-gray-100 relative'>
      <h1 className='text-4xl'>Logo</h1>
      <ul className='hidden sm:flex space-x-8'>
        <li className='hover:text-red-500 cursor-pointer'>
          <a className='flex items-center text-[18px]'>
            <AiOutlineHome className='mr-2' />
            Home
          </a>
        </li>
        <li className='hover:text-red-500 cursor-pointer'>
          <a className='flex items-center text-[18px]'>
            <AiOutlineInfoCircle className='mr-2' />
            About
          </a>
        </li>
        <li className='hover:text-red-500 cursor-pointer'>
          <a className='flex items-center text-[18px]'>
            <AiOutlineShoppingCart className='mr-2' />
            Products
          </a>
        </li>
        <li className='hover:text-red-500 cursor-pointer'>
          <a className='flex items-center text-[18px]'>
            <AiOutlineContacts className='mr-2' />
            Contact
          </a>
        </li>
      </ul>
      <div onClick={() => setShow((prev) => !prev)} className='sm:hidden'>
        {show ? (
          <MdOutlineClose className='text-4xl' />
        ) : (
          <GiHamburgerMenu className='text-4xl' />
        )}
      </div>
      {show && (
        <div className={`sm:hidden absolute top-20 right-4 bg-gray-100 rounded-2xl p-4 scale`}>
          <ul className='space-y-4'>
            <li className='hover:text-red-500'>
              <a className='flex items-center text-[16px]'>
                <AiOutlineHome className='mr-2' />
                Home
              </a>
            </li>
            <li className='hover:text-red-500'>
              <a className='flex items-center text-[16px]'>
                <AiOutlineInfoCircle className='mr-2' />
                About
              </a>
            </li>
            <li className='hover:text-red-500'>
              <a className='flex items-center text-[16px]'>
                <AiOutlineShoppingCart className='mr-2' />
                Products
              </a>
            </li>
            <li className='hover:text-red-500'>
              <a className='flex items-center text-[16px]'>
                <AiOutlineContacts className='mr-2' />
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
