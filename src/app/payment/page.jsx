"use client";
import React from "react";
import Image from "next/image";
import OrderCard from "../components/orderCard";
import visaCard from "../../../public/images/visa.svg";
import masterCard from "../../../public/images/mastercard.svg";
import dynamic from "next/dynamic";
import { FaPlus } from "react-icons/fa";
import PaymentCard from "../components/paymentCard";
import AddToWishlistButton from "../components/AddToWishlistButton";
const StepperComponent = dynamic(() => import("../components/Stepper"), {
  ssr: false,
});

export default function Payment() {
  return (
    <main className="container mx-auto px-4 bg-white h-full mt-[3.375rem] mb-[3.5rem]">
      <section>
        <div className="flex flex-col md:flex-row justify-between md:gap-20 gap-0">
          <div className="w-full">
            <div className="">
              <StepperComponent />
            </div>

            <div className="flex flex-col justify-between pb-8 w-full">
              <div className="font-bold mb-6 text-xl">Payment Method</div>
              <div>
                <div>
                  <PaymentCard
                    paymentCardImg={visaCard}
                    expiryDate="12/2022"
                    cardNumber="****6754"
                  />
                </div>
                <div>
                  <PaymentCard
                    paymentCardImg={masterCard}
                    expiryDate="06/2021"
                    cardNumber="****5732"
                  />
                </div>
              </div>
              <div className="mt-[2.125rem]">
                <AddToWishlistButton
                  addToText="Add Payment Method"
                  Icon={<FaPlus />}
                />
              </div>

              {/* <button className="flex items-center gap-4 text-[#3AA39F] mt-[2.125rem]">
                <FaPlus /> Add Payment Method
              </button> */}
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
