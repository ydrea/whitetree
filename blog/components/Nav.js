import Link from "next/link";
import React from "react";
import Login from "./Login";
import Logout from "./Logout";
//
const Nav = () => {
  //form handle
  const handleChange = () => {};

  return (
    <nav
      className="flex flex-wrap items-center justify-between w-full
          py-4 md:py-0 px-4 text-lg text-gray-700 bg-white"
    >
      <div>
        <Link href="/" passHref>
          <a>Home</a>
        </Link>
      </div>
      <div
        className="hidden w-full md:flex md:items-center md:w-auto"
        id="menu"
      >
        <ul
          className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0 space-x-2"
        >
          <li>
            <Logout /> <Login />
          </li>
          <li>
            <Link href="/">
              <a className="md:p-2 py-2 block hover:text-purple-400">
                Restaurants
              </a>
            </Link>
          </li>
          <li>
            <Link href="/producers">
              <a
                className="md:p-2 py-2 block hover:text-purple-400"
                // href="#"
              >
                Producers
              </a>
            </Link>
          </li>
          <li>
            <Link href="/menus">
              <a
                className="md:p-2 py-2 block hover:text-purple-400"
                // href="#"
              >
                Menus
              </a>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <a
                className="md:p-2 py-2 block hover:text-purple-400"
                // href="#"
              >
                Products
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
