"use client";

const AddToWishlistButton = ({ addToText, Icon }) => {
  return (
    <button className="text-sm text-primary flex items-center hover:text-primaryHover justify-center">
      <div className="">{Icon}</div>
      <span className="ml-1">{addToText}</span>
    </button>
  );
};

export default AddToWishlistButton;
