import Image from "next/image";
export default function Icon({
  name,
  height = 24,
  width = 24,
  alt = "Icon",
  className = "",
}) {
  return (
    <>
      <Image
        src={`/images/icons/${name}.svg`}
        width={width}
        height={height}
        alt={alt}
        className={className}
      />
    </>
  );
}
