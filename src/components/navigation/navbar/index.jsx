"use client";
import React, { useState } from "react";
import Link from "next/link";
import searchButton from "@images/headerButtons/searchButton.svg";
import menuButton from "@images/headerButtons/menuButton.svg";
import shoppingCartButton from "@images/headerButtons/shoppingCartButton.svg";
import Icon from "@/components/UIComponents/Icon";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="w-full h-20 bg-white sticky top-0 border border-b-[#D1D1D8] z-30">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href="/" className="text-2xl">
              Cozy&reg;
            </Link>
            <ul className="hidden md:flex gap-x-6 text-black">
              <li className="text-sm font-semibold transition-colors duration-300 hover:text-gray-600">
                <Link href="/cart">CART</Link>
              </li>
              <li className="text-sm font-semibold transition-colors duration-300 hover:text-gray-600">
                <Link href="/address">ADDRESS</Link>
              </li>
              <li className="text-sm font-semibold transition-colors duration-300 hover:text-gray-600">
                <Link href="/shipping">SHIPPING</Link>
              </li>
              <li className="text-sm font-semibold transition-colors duration-300 hover:text-gray-600">
                <Link href="/payment">PAYMENT</Link>
              </li>
              <li className="text-sm font-semibold transition-colors duration-300 hover:text-gray-600">
                <Link href="/contact">CONTACT</Link>
              </li>
            </ul>

            <ul className="md:flex gap-x-6 text-black">
              <li className="md:block hidden">
                <Link href="/search">
                  <Icon src={searchButton} />
                </Link>
              </li>
              <li className="md:block hidden ">
                <Link href="/cart">
                  <Icon src={shoppingCartButton} />
                </Link>
              </li>
              <li className="md:hidden block">
                <button onClick={toggleSidebar}>
                  <Icon src={menuButton} />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {isSidebarOpen && (
        <div className="fixed top-0 left-0 h-screen w-64 bg-gray-200 shadow z-50">
          <ul className="py-4 text-black">
            <li className="py-2 px-4 text-sm font-semibold transition-colors duration-300 hover:text-gray-600">
              <Link href="/cart">CART</Link>
            </li>
            <li className="py-2 px-4 text-sm font-semibold transition-colors duration-300 hover:text-gray-600">
              <Link href="/address">ADDRESS</Link>
            </li>
            <li className="py-2 px-4 text-sm font-semibold transition-colors duration-300 hover:text-gray-600">
              <Link href="/shipping">SHPPING</Link>
            </li>
            <li className="py-2 px-4 text-sm font-semibold transition-colors duration-300 hover:text-gray-600">
              <Link href="/payment">PAYMENT</Link>
            </li>
            <li className="py-2 px-4 text-sm font-semibold transition-colors duration-300 hover:text-gray-600">
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
