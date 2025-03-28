import React from "react";

const AddressCard = ({
  name = "John",
  address = "Luxembourg",
  contact = "+352 5678",
  place = "HOME",
}) => {
  return (
    <div className="flex justify-between w-full">
      <label className="flex items-start cursor-pointer">
        <input type="radio" name="address" className="mr-4 mt-1" />
        <div>
          <div className="text-xl font-semibold text-[#17183B]">
            {name}
            <span className="ml-[0.875rem] text-xs border-2 rounded border-primary text-primary px-2 py-1">
              {place}
            </span>
          </div>
          <div className="mt-4 mb-2">{address}</div>
          <div className="text-base text-[#17183B]">
            <span className="font-semibold">Contact- </span>
            {contact}
          </div>
        </div>
      </label>
      <div className="text-[#17183B] font-semibold flex gap-4 flex-col md:flex-row">
        <button className="">Edit</button>
        <button className="text-[#ed2939]">Remove</button>
      </div>
    </div>
  );
};

export default AddressCard;
