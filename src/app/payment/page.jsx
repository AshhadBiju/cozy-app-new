"use client";
import React from "react";
import { useState } from "react";
import OrderCard from "@components/OrderCard";
import VisaCard from "@images/visa.svg";
import MasterCard from "@images/mastercard.svg";
import PaymentCard from "@components/paymentCard";
import plus from "@images/icons/plus.svg";
import Icon from "@components/UIComponents/Icon";

const paymentCards = [
  { paymentCardImg: VisaCard, expiryDate: "12/2022", cardNumber: "****6754" },
  { paymentCardImg: MasterCard, expiryDate: "06/2021", cardNumber: "****5732" },
];

export default function Payment() {
  return (
    <main className="container mx-auto px-4 bg-white h-full mt-[2rem] md:mt-[3.375rem] mb-0 md:mb-[2rem]">
      <section>
        <div className="flex flex-col md:flex-row justify-between md:gap-20 gap-0">
          <div className="w-full">
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
              <button className="mt-[2.125rem]">
                <Icon
                  src={plus}
                  text="Add Payment"
                  textClassName="text-primary"
                />
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
