"use client";
import React from "react";
import plus from "@images/icons/plus.svg";
import OrderCard from "@/components/OrderCard";
import AddressCard from "@/components/AddressCard";
import Icon from "@/components/UIComponents/Icon";

export default function Cart() {
  return (
    <main className="container mx-auto px-4 bg-white h-full mt-[3.375rem] mb-[3.5rem]">
      <section>
        <div className="flex flex-col md:flex-row justify-between md:gap-20 gap-0">
          <div className="w-full">
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
              <button className="mt-[2.125rem]">
                <Icon
                  src={plus}
                  text="Add New Address"
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
