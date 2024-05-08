"use client";
import React from "react";
import Image from "next/image";
import OsmondArmchair from "../../../public/images/OsmondArmchair.svg";
import ProductItem from "../components/ProductItem";
import OrderCard from "../components/orderCard";
import Stepper from "../components/Stepper";
import AddressCard from "../components/addressCard";
import dynamic from "next/dynamic";
import { FaPlus } from "react-icons/fa";

const StepperComponent = dynamic(() => import("../components/Stepper"), {
  ssr: false,
});

export default function Cart() {
  return (
    <main className="container mx-auto px-4 bg-white h-full mt-[3.375rem] mb-[3.5rem]">
      <section>
        <div className="flex flex-col md:flex-row justify-between md:gap-20 gap-0">
          <div className="w-full">
            <div className="">
              <StepperComponent />
            </div>

            <div className="flex flex-col justify-between pb-8 w-full">
              <AddressCard
                name="Huzefa Bagwala"
                address="1131 Dusty Townline, Jacksonville, TX 40322"
                contact="(936) 361-0310"
                place="HOME"
              />
              <div className="mt-14 pb-8 border-[#D1D1D8] border-b-2 ">
                <AddressCard
                  name="Huzefa Bagwala"
                  address="1131 Dusty Townline, Jacksonville, TX 40322"
                  contact="(936) 361-0310"
                  place="HOME"
                />
              </div>
              <button className="flex items-center gap-4 text-[#3AA39F] ml-[4.75rem] mt-[2.125rem]">
                <FaPlus /> Add New Address
              </button>
            </div>
          </div>
          <div>
            <OrderCard />
          </div>
        </div>
      </section>
    </main>
  );
}
