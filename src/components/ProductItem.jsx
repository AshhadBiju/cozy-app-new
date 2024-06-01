import React from "react";
import Counter from "@/components/Counter";
import Image from "next/image";
const ProductItem = ({ imageUrl, title, color, price }) => {
  return (
    <div className="flex justify-between pb-8 w-full max-h-48">
      <div className="flex gap-0 md:gap-9">
        <div>
          <Image src={imageUrl} />
        </div>
        <div>
          <div className="flex justify-between w-full items-center">
            <div className="text-xl font-semibold text-[#17183B]">{title}</div>
          </div>

          <div className="mt-4 mb-7 text-[#A2A3B1] font-semibold">
            Color <span className="text-[#17183B]">{color}</span>
          </div>
          <div className="flex items-center gap-7">
            <Counter /> <button className="text-[#ed2939]">Remove</button>
          </div>
        </div>
      </div>

      <div className="text-[#17183B] font-semibold">
        <span>${price}</span>
      </div>
    </div>
  );
};
export default ProductItem;
