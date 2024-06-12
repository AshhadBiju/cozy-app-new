"use client";
import React, { useState } from "react";
import plus from "@images/icons/plus.svg";
import OrderCard from "@components/OrderCard";
import AddressCard from "@components/AddressCard";
import Icon from "@components/UIComponents/Icon";

export default function Cart() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Huzefa Bagwala",
      address: "1131 Dusty Townline, Jacksonville, TX 40322",
      contact: "(936) 361-0310",
      place: "HOME",
    },
    {
      id: 2,
      name: "Jane Doe",
      address: "456 Maple Street, Springfield, IL 62704",
      contact: "(217) 555-1234",
      place: "OFFICE",
    },
  ]);
  return (
    <main className="container mx-auto px-4 bg-white h-full mt-[2rem] md:mt-[3.375rem] mb-0 md:mb-[2rem]">
      <section>
        <div className="flex flex-col md:flex-row justify-between md:gap-20 gap-0">
          <div className="w-full">
            <div className="flex flex-col justify-between gap-y-14 w-full">
              {addresses.map((address) => (
                <div key={address.id} className="">
                  <AddressCard
                    name={address.name}
                    address={address.address}
                    contact={address.contact}
                    place={address.place}
                  />
                </div>
              ))}
            </div>
            <div className="border-[#D1D1D8] border-t-2 mt-8"></div>
            <button className="my-8">
              <Icon
                src={plus}
                text="Add New Address"
                textClassName="text-primary"
              />
            </button>
          </div>
          <div>
            <OrderCard />
          </div>
        </div>
      </section>
    </main>
  );
}
