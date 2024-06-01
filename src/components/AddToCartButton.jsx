"use client";
import React from "react";

const AddToCartButton = ({ cartText }) => {
  return (
    <button className="bg-[#3AA39F] items-center text-white rounded-[0.25rem] hover:bg-[#318a87] min-h-14 w-full">
      {cartText}
    </button>
  );
};

export default AddToCartButton;
