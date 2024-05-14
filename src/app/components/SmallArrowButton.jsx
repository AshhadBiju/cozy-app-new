import Image from "next/image";

const SmallArrowButton = ({ arrowButton, defaultName }) => {
  return (
    <div>
      <Image
        src={arrowButton}
        alt={defaultName}
        width={24}
        height={24}
        className="px-[0.563rem] py-[0.375rem]"
      />
    </div>
  );
};

export default SmallArrowButton;
