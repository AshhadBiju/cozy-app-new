import Image from "next/image";

import beforeLike from "../public/images/icons/before-like.svg";

export default function Icon({
  height = 24,
  width = 24,
  alt = "Icon",
  name = beforeLike,
  className = "",
}) {
  return (
    <div>
      <Image
        height={height}
        width={width}
        alt={alt}
        src={`/images/icons/${name}.svg`}
        className={className}
      />
    </div>
  );
}
