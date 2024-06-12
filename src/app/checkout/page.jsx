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
      label: "cart",
      component: Cart,
    },
    {
      label: "address",
      component: Address,
    },
    {
      label: "shipping",
      component: Shipping,
    },
    {
      label: "payment",
      component: Payment,
    },
  ];

  const ActiveComponent = stepperComponents[activeIndex].component;

  return (
    <main className="container mx-auto px-4 text-black h-full mt-[2rem] md:mt-[3.375rem] mb-0 md:mb-[2rem]">
      <div className="bg-black size-36">
        <button
          onClick={() => {
            if (activeIndex < stepperComponents.length - 1) {
              setActiveIndex(activeIndex + 1);
            }
          }}
          className="size-9 bg-red-600"
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
