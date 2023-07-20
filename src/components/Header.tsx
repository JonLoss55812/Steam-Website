```tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="hidden w-full text-gray-600 md:flex md:items-center">
            <Link href="/">
              <a className="mx-1.5 hover:text-gray-800 dark:hover:text-white">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="mx-1.5 hover:text-gray-800 dark:hover:text-white">
                About Us
              </a>
            </Link>
            <Link href="/services">
              <a className="mx-1.5 hover:text-gray-800 dark:hover:text-white">
                Services
              </a>
            </Link>
            <Link href="/portfolio">
              <a className="mx-1.5 hover:text-gray-800 dark:hover:text-white">
                Portfolio
              </a>
            </Link>
            <Link href="/blog">
              <a className="mx-1.5 hover:text-gray-800 dark:hover:text-white">
                Blog
              </a>
            </Link>
            <Link href="/contact">
              <a className="mx-1.5 hover:text-gray-800 dark:hover:text-white">
                Contact
              </a>
            </Link>
          </div>
          <div className="flex items-center justify-end w-full">
            <button className="text-gray-600 dark:text-white focus:outline-none mx-4 sm:mx-0">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
```