"use client";
import React from "react";
import { useState } from "react";
import Select from "react-select";
import OrderCard from "../components/orderCard";
import ShippingMethod from "../components/shipmentMethod";
import Stepper from "../components/Stepper";

export default function Cart() {
  const [currentStep, setCurrentStep] = useState(0);
  const NUMBER_OF_STEPS = 5;
  const goToNextStep = () =>
    setCurrentStep((prev) => (prev === NUMBER_OF_STEPS - 1 ? prev : prev + 1));
  const goToPreviousStep = () =>
    setCurrentStep((prev) => (prev <= 0 ? prev : prev - 1));

  const options = [
    { value: "option1", label: "Select date" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <main className="container mx-auto px-4 bg-white h-full mt-[3.375rem] mb-[3.5rem]">
      <section>
        <div className="flex flex-col md:flex-row justify-between md:gap-20 gap-0">
          <div className="w-full">
            <div>
              <Stepper
                currentStep={currentStep}
                numberOfSteps={NUMBER_OF_STEPS}
              />
              <br />
              <section className="flex gap-10">
                <button
                  onClick={goToPreviousStep}
                  className="bg-blue-600 text-white p-2 rounded-md"
                >
                  Previous step
                </button>
                <button
                  onClick={goToNextStep}
                  className="bg-blue-600 text-white p-2 rounded-md"
                >
                  Next step
                </button>
              </section>
            </div>

            <div className="flex flex-col justify-between pb-8 w-full">
              <div className="font-bold mb-6 text-xl">Shipment Method</div>
              <div>
                <ShippingMethod
                  shippingMethod="Regular Shipping"
                  date="01 Feb, 2023"
                  freeOrNot="Free"
                />
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
