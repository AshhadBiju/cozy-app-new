import Image from "next/image";

export default function Icon({
  name,
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
        src={`./images/icons/${name}.svg`}
        //Always put public in root, only then this will work. The URL structure should also be just like this
        width={width}
        height={height}
        alt={alt}
        className={className}
      />
      <div className={textClassName}>{text}</div>
    </div>
  );
}
