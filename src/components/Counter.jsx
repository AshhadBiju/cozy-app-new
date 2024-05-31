"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex gap-10 border-[#A2A3B1] border-2 rounded-[0.25rem] w-40 px-4 py-[0.875rem]">
      <button onClick={decrement}>
        <FaMinus />
      </button>
      <span>{count}</span>
      <button onClick={increment}>
        <FaPlus />
      </button>
    </div>
  );
};

export default Counter;
