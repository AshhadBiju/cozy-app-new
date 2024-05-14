"use client";
import React from "react";
import Stepper from "../components/Stepper";
import { useState } from "react";
import OrderCard from "../components/orderCard";
import visaCard from "../../../public/images/visa.svg";
import masterCard from "../../../public/images/mastercard.svg";
import PaymentCard from "../components/paymentCard";
import AddToWishlistButton from "../components/AddToWishlistButton";

const paymentCards = [
  { paymentCardImg: visaCard, expiryDate: "12/2022", cardNumber: "****6754" },
  { paymentCardImg: masterCard, expiryDate: "06/2021", cardNumber: "****5732" },
];

export default function Payment() {
  const [currentStep, setCurrentStep] = useState(0);
  const NUMBER_OF_STEPS = 5;
  const goToNextStep = () =>
    setCurrentStep((prev) => (prev === NUMBER_OF_STEPS - 1 ? prev : prev + 1));
  const goToPreviousStep = () =>
    setCurrentStep((prev) => (prev <= 0 ? prev : prev - 1));

  return (
    <main className="container mx-auto px-4 bg-white h-full mt-[3.375rem] mb-[3.5rem]">
      <section>
        <div className="flex flex-col md:flex-row justify-between md:gap-20 gap-0">
          <div className="w-full">
            <div className="">
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
            </div>

            <div className="flex flex-col justify-between pb-8 w-full">
              <div className="font-bold mb-6 text-xl">Payment Method</div>
              <div>
                {paymentCards.map((card, index) => (
                  <div key={index}>
                    <PaymentCard
                      paymentCardImg={card.paymentCardImg}
                      expiryDate={card.expiryDate}
                      cardNumber={card.cardNumber}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-[2.125rem]">
                <AddToWishlistButton addToText="Add Payment Method" />
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
