"use client";

const AddToWishlistButton = ({ addToText, Icon }) => {
  return (
    <button className="text-sm text-[#3AA39F] flex items-center  hover:text-[#318a87]">
      <div className="h-5 w-5 ">{Icon}</div>
      <span className="ml-1">{addToText}</span>
    </button>
  );
};

export default AddToWishlistButton;
