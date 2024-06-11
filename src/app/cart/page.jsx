"use client";
import { useState } from "react";
import React from "react";
import OsmondArmchair from "@/public/images/OsmondArmchair.svg";
import ProductItem from "@/components/ProductItem";
import OrderCard from "@/components/OrderCard";
import percent from "@/public/images/percent.svg";
import Icon from "@/components/UIComponents/Icon";
export default function Cart() {
  const [cart, setCartItems] = useState({
    noOfItems: 2,
    cartDiscountMessage:
      "10% Instant Discount with Federal Bank Debit Cards on a min spend of $150. TCA",
  });
  return (
    <main className="container mx-auto px-4 bg-white h-full mt-[3.375rem] mb-[3.5rem]">
      <section>
        <div className="flex flex-col md:flex-row justify-between gap-20">
          <div className="w-full">
            <div className="flex gap-6 items-center mb-[3.75rem]">
              <div className="text-[2rem] text-[#17183B] font-bold">Cart</div>
              <div className="text-xl text-[#A2A3B1] font-semibold flex space-x-2">
                <span>{cart.noOfItems}</span>
                <span>Items</span>
              </div>
            </div>
            <div className="border-b-2 border-[#D1D1D8]">
              <ProductItem
                imageUrl={OsmondArmchair}
                title="Osmond Armchair"
                color="Gunnared biege"
                price="149.99"
              />
            </div>

            <div className="mt-8">
              <ProductItem
                imageUrl={OsmondArmchair}
                title="Meryl Lounge Chair"
                color="Lysed bright green"
                price="169.99"
              />
            </div>

            <div className="flex p-5 gap-3 border-2 border-primary rounded mt-9 bg-primary bg-opacity-10">
              <div>
                <Icon src={percent} />
              </div>
              <div className="text-[#17183B]">{cart.cartDiscountMessage}</div>
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
