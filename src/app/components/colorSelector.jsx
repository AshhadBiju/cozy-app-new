"use client";
import React from "react";

const ColorComponent = ({ color }) => (
  <div className={`bg-${color} rounded-full p-[0.670rem]`}></div>
);

const ColorComponents = ({ colors }) => (
  <div className="flex gap-4 my-9">
    {colors.map((color, index) => (
      <ColorComponent key={index} color={color} />
    ))}
  </div>
);

export default ColorComponents;
