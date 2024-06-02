"use client";
import React from "react";

const AddToCartButton = ({ cartText = "click" }) => {
  return (
    <button className="bg-primary items-center text-white rounded-[0.25rem] hover:bg-primaryHover min-h-14 w-full">
      {cartText}
    </button>
  );
};

export default AddToCartButton;
