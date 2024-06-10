import Image from "next/image";

export default function Icon({
  src,
  height = 24,
  width = 24,
  alt = "Icon",
  className = "",
}) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
  );
}
