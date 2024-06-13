"use client";
import { useState } from "react";
import Cart from "@components/StepperComponents/cart";
import Address from "@components/StepperComponents/Address";
import Shipping from "@components/StepperComponents/Shipping";
import Payment from "@components/StepperComponents/Payment";

export default function Checkout() {
  const [activeIndex, setActiveIndex] = useState(0);

  const stepperComponents = [
    {
      label: "Cart",
      component: Cart,
    },
    {
      label: "Address",
      component: Address,
    },
    {
      label: "Shipping",
      component: Shipping,
    },
    {
      label: "Payment",
      component: Payment,
    },
  ];

  const ActiveComponent = stepperComponents[activeIndex].component;

  return (
    <main className="container mx-auto px-4 text-black h-full mt-8 md:mt-14 mb-0 md:mb-8">
      <div className="w-full mb-8">
        <ul className="flex justify-between items-center w-full">
          {stepperComponents.map((step, index) => (
            <li key={index} className="flex-1 flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition ease-in-out duration-400 ${
                    index <= activeIndex
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {index + 1}
                </div>
                <span className="mt-2 text-sm md:text-base">{step.label}</span>
              </div>
              {index < stepperComponents.length - 1 && (
                <div
                  className={`flex-1 h-1 transition ease-in-out duration-400 mb-8 ${
                    index < activeIndex ? "bg-primary" : "bg-gray-200"
                  }`}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between mb-8 ">
        <button
          onClick={() => {
            if (activeIndex > 0) {
              setActiveIndex(activeIndex - 1);
            }
          }}
          className={`px-4 py-2 rounded bg-primary hover:bg-primaryHover transition ease-in-out duration-400 text-white ${
            activeIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={activeIndex === 0}
        >
          Go Back
        </button>
        <button
          onClick={() => {
            if (activeIndex < stepperComponents.length - 1) {
              setActiveIndex(activeIndex + 1);
            }
          }}
          className="px-4 py-2 rounded bg-primary text-white hover:bg-primaryHover transition ease-in-out duration-400"
        >
          Next
        </button>
      </div>
      <div>
        <ActiveComponent />
      </div>
    </main>
  );
}
