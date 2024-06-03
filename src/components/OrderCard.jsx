import React from "react";
import Image from "next/image";
import TrailingIcon from "@/public/images/trailingIcon.svg";
// import AddToCartButton from "../components/AddToCartButton";
import Link from "next/link";

export default function OrderCard({ orderCardLink }) {
  return (
    <div className="order-card border p-8 max-w-full md:w-[23.75rem]">
      <h2 className="font-bold">Order Summary</h2>
      <div className="top-group border-b-2 border-[#D1D1D8] py-8">
        <div className="flex justify-between mb-6">
          <div>Price</div>
          <div>
            <span>$</span>319.98
          </div>
        </div>
        <div className="flex justify-between mb-6">
          <div>Discount</div>
          <div>
            <span>$</span>31.9
          </div>
        </div>
        <div className="flex justify-between mb-6">
          <div>Shipping</div>
          <div className="">
            <span className="displ">$</span>Free
          </div>
        </div>
        <div className="flex justify-between">
          <div>Coupon Applied</div>
          <div>
            <span>$</span>0.00
          </div>
        </div>
      </div>
      <div className="pt-8">
        <div className="flex justify-between mb-6">
          <div>TOTAL</div>
          <div>
            <span>$</span>288.08
          </div>
        </div>
        <div className="flex justify-between mb-6 text-base">
          <div>Estimated Delivery by</div>
          <div>01 Feb, 2023</div>
        </div>
        <div className="flex justify-between border mb-6 min-h-14 w-full p-4">
          <input
            type="text"
            className="outline-none max-w-fit text-base"
            placeholder="Coupon code"
          />
          <Image src={TrailingIcon} width={24} height={24} />
        </div>
        <div>
          <Link href="">
            <button className="bg-primary flex items-center justify-center text-white rounded-[0.25rem] hover:bg-primaryHover min-h-14 w-full">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
