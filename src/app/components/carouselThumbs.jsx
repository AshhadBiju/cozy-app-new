import Image from "next/image";
import React from "react";
import img from "../../../public/images/MerylLoungeChairTeal.svg";
export const Thumb = (props) => {
  const { selected, index, onClick, thumbImages } = props;

  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected" : ""
      )}
    >
      {/* <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number"
      >
        {index + 1}
      </button> */}
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number"
      >
        <Image src={img} alt={`Thumbnail ${index + 1}`} />
      </button>
    </div>
  );
};
