import Link from "next/link";
import React, { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";

function Navbar() {

  const router=useRouter()
  console.log(router.pathname);
  
 
  return (
    <div>
      <ul
        id="nav"
        className="z-10 flex content-center w-full bg-white text-black fixed h-16 shadow-md"
      >
        <div className="sm:contents">
          <li className="mr-5 lg:mr-8 ml-6  my-4 text-lg">
            <h1 className="text-block">
              <a className="text-green-500 logo">Flex</a>
              <a className="text-black logo">Build</a>
            </h1>
          </li>
            <li className={`mx-5 w-44 py-4 px-2 text-lg text-center border-b-4 border-transparent hover:text-green-600   ${router.pathname=="/"?"text-green-600 !border-green-500":""}`}>
              <Link href="/">Your Design</Link>
            </li>
          
            <li className={`mx-5 w-72 py-4 px-2 text-lg text-center border-b-4 border-transparent hover:text-green-600
            ${router.pathname=="/write-a-component"?"text-green-600 !border-green-500":""}`}>
              <Link href="/write-a-component">Create Component</Link>
            </li>

        </div>

        <div className="lg:hidden md:hidden">
          <button
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
            className="mt-3.5  ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            <i
              className="iconify"
              data-icon="akar-icons:three-line-horizontal"
            ></i>
          </button>

          <div>
            <div
              className=" ml-4 z-10  text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 "
              id="dropdown"
            >
              <ul className="py-1" aria-labelledby="dropdownButton">
                <li>
                  <Link
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/DesignYourSite"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Your Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/WriteAComponent"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Write A Component
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-end">
          <li className="mr-3 lg:mr-6 text-right  ">
            <div className="py-3">{<ConnectButton></ConnectButton>}</div>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
