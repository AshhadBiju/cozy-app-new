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
import ShippingMethod from "../components/shipmentMethod";
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
              <div className="font-bold mb-6 text-xl">Shipment Method</div>
              <div>
                {/* <div className="flex items-center justify-between border px-6 py-4">
                  <label htmlFor="nextDay">
                    <div className="flex items-center">
                      <input type="radio" id="nextDay" name="shipmentMethod" />
                      <div className="ml-2 text-base">
                        <span className="font-bold  mr-2">Free</span>
                        Regular Shipping
                      </div>
                    </div>
                  </label>
                  <div className="font-bold">01 Feb, 2023</div>
                </div> */}
                <ShippingMethod
                  shippingMethod="Regular Shipping"
                  date="01 Feb, 2023"
                  freeOrNot="Free"
                />
                {/* <div className="flex items-center justify-between border px-6 py-4">
                  <label htmlFor="express">
                    <div className="flex items-center">
                      <input type="radio" id="express" name="shipmentMethod" />
                      <div className="ml-2 text-base">
                        <span className="font-bold  mr-2">$8.50</span>
                        Priority Shipping
                      </div>
                    </div>
                  </label>
                  <div className="font-bold">28 Jan, 2023</div>
                </div> */}
                <ShippingMethod
                  shippingMethod="Priority Shipping"
                  date="28 Jan, 2023"
                  freeOrNot="$8.50"
                />
                <div className="flex justify-between border px-6 py-4 md:flex-row flex-col md:items-center items-center">
                  <label htmlFor="standard">
                    <div className="flex items-center">
                      <input type="radio" id="standard" name="shipmentMethod" />
                      <div className="ml-2 text-base">
                        <span className="font-bold  mr-2">Schedule</span>
                        Choose a date that works for you
                      </div>
                    </div>
                  </label>
                  <select className="text-[#8C92AC]">
                    <option value="option1">Select date</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
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
