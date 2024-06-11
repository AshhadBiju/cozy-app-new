"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import TrailingIcon from "@/public/images/trailingIcon.svg";
// import AddToCartButton from "../components/AddToCartButton";
import Link from "next/link";
import Button from "./UIComponents/Button";
import Icon from "./UIComponents/Icon";

export default function OrderCard() {
  const [orderCard, setOrderCard] = useState({
    price: 149.99,
    discount: 31.9,
    shipping: "Free",
    couponApplied: 0.0,
    total: 288.08,
    estimatedDelivery: "01 Feb, 2023",
  });

  return (
    <div className="order-card border p-8 max-w-full md:w-[23.75rem]">
      <h2 className="font-bold">Order Summary</h2>
      <div className="top-group border-b-2 border-[#D1D1D8] py-2 md:py-8">
        <div className="flex justify-between mb-6">
          <div>Price</div>
          <div className="space-x-1">
            <span>$</span>
            <span>{orderCard.price}</span>
          </div>
        </div>
        <div className="flex justify-between mb-6">
          <div>Discount</div>
          <div className="space-x-1">
            <span>$</span>
            <span>{orderCard.discount}</span>
          </div>
        </div>
        <div className="flex justify-between mb-6">
          <div>Shipping</div>
          <div>
            <span>{orderCard.shipping}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <div>Coupon Applied</div>
          <div className="space-x-1">
            <span>$</span>
            <span>{orderCard.couponApplied}</span>
          </div>
        </div>
      </div>
      <div className="pt-8">
        <div className="flex justify-between mb-6">
          <div>TOTAL</div>
          <div className="space-x-1">
            <span>$</span>
            <span>{orderCard.total}</span>
          </div>
        </div>
        <div className="flex justify-between mb-6 text-base">
          <div>Estimated Delivery by</div>
          <div>{orderCard.estimatedDelivery}</div>
        </div>
        <div className="flex justify-between border mb-6 min-h-14 w-full p-4">
          <input
            type="text"
            className="outline-none max-w-fit text-base"
            placeholder="Coupon code"
          />
          <Icon src={TrailingIcon} />
        </div>
        <div>
          <Button
            buttonText="Proceed to Checkout"
            onClick={() => alert("Going to Checkout !")}
            className=""
            buttonColors="primary"
          />
        </div>
      </div>
    </div>
  );
}
