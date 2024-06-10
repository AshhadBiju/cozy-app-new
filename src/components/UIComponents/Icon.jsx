import Image from "next/image";

export default function Icon({
  src,
  height = 24,
  width = 24,
  alt = "Icon",
  className = "",
  text = "",
  textClassName = "",
}) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={className}
      />
      {/* <div>{text}</div> */}
      <div className={textClassName}>{text}</div>
    </div>
  );
}
