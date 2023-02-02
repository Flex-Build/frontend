import Link from "next/link";
import React, { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Navbar() {
  const [usedisplay, setusediplay] = useState(false);
  const enterd = () => {
    setusediplay(true);
  };

  let pro = "hidden";
  const [dis, setdisplay] = useState("hidden");
  function t() {
    {
      if (dis == "hidden") {
        setdisplay("visible");
        return;
      } else if (dis == "visible") {
        setdisplay("hidden");
        return;
      } else {
        setdisplay("hidden");
      }
    }
  }
  return (
    <div>
      <ul
        id="nav"
        className=" flex content-center w-full bg-white text-black fixed h-16 border-solid border-2 border-black"
      >
        <div className="hidden sm:contents">
          <li className="mr-5 lg:mr-8 ml-6  my-4 text-lg">
            <h1 className="text-block">
              <a className="text-green-500 font-bold">Flexi</a>
              <a className="text-black ">Build</a>
            </h1>
          </li>
          <li className="mx-5 w-44 py-4 px-2 text-lg hover:border-b-4 border-green-500">
            <Link href="/design-your-site">Your Design</Link>
          </li>
          <li className="mx-5 w-72 py-4 px-2 text-lg hover:border-b-4 border-green-500 ">
            <Link href="/write-a-component">Write A Component</Link>
          </li>
        </div>

        <div className="lg:hidden  md:hidden">
          <button
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
            className="mt-3.5  ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:hidden md-hidden sm-hidden"
            type="button"
            onClick={t}
          >
            <i
              className="iconify"
              data-icon="akar-icons:three-line-horizontal"
            ></i>
          </button>

          <div className={dis}>
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

        <div className="  w-full flex justify-end">
          <li className="mr-3 lg:mr-6 text-right  ">
            <div className="py-3">{<ConnectButton></ConnectButton>}</div>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
