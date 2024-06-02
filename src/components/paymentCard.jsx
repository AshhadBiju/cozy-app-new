import React from "react";
import Image from "next/image";

const PaymentCard = ({
  paymentCardImg = "/defaultCard.svg",
  expiryDate = "MM/YY",
  cardNumber = "*** *** ***", // default parameters
}) => {
  return (
    <div className="flex items-center justify-between border px-6 py-4 flex-wrap gap-3">
      <label>
        <div className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="paymentMethod"
            className="h-4 w-4 bg-green-500 ring-green-500 text-green-600 border-gray-300 rounded"
          />
          <Image src={paymentCardImg} width={24} height={17} className="ml-3" />
          <div className="text-base text-[#CAD2DB] flex">
            <div className="text-[#17183B] font-bold ml-4 mr-10">
              {cardNumber}
            </div>
            Expires<span className="ml-1">{expiryDate}</span>
          </div>
        </div>
      </label>
      <button className="font-bold text-[#ed2939]">Remove</button>
    </div>
  );
};

export default PaymentCard;
