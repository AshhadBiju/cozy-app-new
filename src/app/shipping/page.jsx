"use client";
import React, { useState } from "react";
import Select from "react-select";
import OrderCard from "@components/OrderCard";
import ShippingMethod from "@components/shipmentMethod";

export default function Cart() {
  const [options, setOptions] = useState([
    { value: "option1", label: "Select date" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ]);

  const [shippingMethods, setshippingMethods] = useState([
    {
      shippingMethod: "Regular Shipping",
      date: "01 Feb, 2023",
      freeOrNot: "Free",
    },
    {
      shippingMethod: "Priority Shipping",
      date: "28 Jan, 2023",
      freeOrNot: "$8.50",
    },
  ]);

  return (
    <main className="container mx-auto px-4 bg-white h-full mt-[2rem] md:mt-[3.375rem] mb-0 md:mb-[2rem]">
      <section>
        <div className="flex flex-col md:flex-row justify-between md:gap-20 gap-0">
          <div className="w-full">
            <div className="flex flex-col justify-between pb-8 w-full">
              <div className="font-bold mb-6 text-xl">Shipment Method</div>
              <div>
                {shippingMethods.map((method, index) => (
                  <ShippingMethod
                    key={index}
                    shippingMethod={method.shippingMethod}
                    date={method.date}
                    freeOrNot={method.freeOrNot}
                  />
                ))}
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
                  <Select options={options} className="text-[#8C92AC]" />
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
