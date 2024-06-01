"use client";
import { useState } from "react";
import Image from "next/image";
import plus from "@/public/images/icons/plus.svg";
import minus from "@/public/images/icons/minus.svg";

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
        <Image
          src={minus}
          alt="No button"
          width={34}
          height={34}
          className=""
        />
      </button>
      <span>{count}</span>
      <button onClick={increment}>
        <Image src={plus} alt="No button" width={34} height={34} className="" />
      </button>
    </div>
  );
};

export default Counter;
