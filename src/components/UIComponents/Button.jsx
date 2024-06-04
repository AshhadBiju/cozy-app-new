"use client";
import React from "react";

const Button = ({
  buttonText = "Click here",
  onClick,
  className = "", // Additional custom classNames to style the button or styles to override the default one given below
  size = "md", // Default size of button
  buttonColors = "",
}) => {
  const buttonSizes = {
    sm: "min-h-10 px-4",
    md: "min-h-14 px-6",
    lg: "min-h-16 px-8",
  };
  const buttonColorsDefault = {
    primary: "bg-primary hover:bg-primaryHover", //
  };

  return (
    <button
      onClick={onClick} // onClick, to be changed in the page it's used for, like alert, submit etc
      className={` text-white text-md rounded-[0.25rem] flex items-center justify-center  
      w-full transition-colors duration-200 ${buttonSizes[size]} ${className}
       ${buttonColorsDefault[buttonColors]}`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
