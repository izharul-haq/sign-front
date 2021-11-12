import React from 'react';
import Link from 'next/link';
import { Menu } from '@headlessui/react';

const keyVariants = [
  { name: 'rsa', title: 'RSA' },
  { name: 'elg', title: 'Elgamal' },
];

const Navbar: React.FC = () => {
  return (
    <nav className="z-50 w-full top-0 sticky">
      <div className="w-full p-4 fixed bg-jordy-blue-600">
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-start font-semibold text-xl text-white">
            <Link href="/" passHref>
              <a className="flex flex-row space-x-2 items-center cursor-pointer hover:text-shocking-300">
                <div className="font-logo text-4xl">Sign</div>
              </a>
            </Link>
          </div>
          <div className="flex justify-center space-x-4 text-xl font-semibold text-white">
            <Menu as="div">
              <Menu.Button as="div" className="flex cursor-pointer hover:text-shocking-300">
                KEY
              </Menu.Button>
                <Menu.Items as="div" className="flex flex-col mt-1 space-y-1 w-32 absolute p-2 bg-white outline-none border border-gray-300 rounded shadow right-24">
                {keyVariants.map(({ name, title}) => (
                  <Link key={`${name}`} href={`/key/${name}`} passHref>
                    <Menu.Item as="a" className="flex items-center py-1 cursor-pointer font-semibold px-2.5 text-jordy-blue-600 duration-150 hover:bg-jordy-blue-300 hover:text-shocking-600 rounded-md">
                      <div className="w-full text-center">{title}</div>
                    </Menu.Item>
                  </Link>
                ))}
              </Menu.Items>
            </Menu>
            <div className="cursor-pointer hover:text-shocking-300">
              <Link href="/sign" passHref>
                <a className="flex flex-row space-x-2 items-center cursor-pointer hover:text-shocking-300">
                  <div className="">SIGNATURE</div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
