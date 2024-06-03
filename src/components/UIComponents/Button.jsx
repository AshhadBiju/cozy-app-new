"use client";
import React from "react";

const Button = ({
  cartText = "Click here",
  onClick,
  className = "", // Additional custom classNames to style the button or styles to override the default one given below
  size = "md", // Default size of button
}) => {
  const buttonSizes = {
    sm: "min-h-10 px-4",
    md: "min-h-14 px-6",
    lg: "min-h-16 px-8",
  };

  return (
    <button
      onClick={onClick} // onClick, to be changed in the page it's used for, like alert, submit etc
      className={`bg-primary text-white text-md rounded-[0.25rem] flex items-center justify-center hover:bg-primaryHover w-full transition-colors duration-200 ${buttonSizes[size]} ${className}`}
    >
      {cartText}
    </button>
  );
};

export default Button;
