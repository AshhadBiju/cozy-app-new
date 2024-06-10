// "use client";
import Link from "next/link";
import Image from "next/image";

import ProductDetails from "@/components/ProductDetails/ProductDetails";
import BackArrowButton from "@/public/images/icons/backArrowButton.svg";
import BackSmallArrowButton from "@/public/images/backSmallArrowButton.svg";
import ForwardSmallArrowButton from "@/public/images/forwardSmallArrowButton.svg";
import MerylLoungeChairTeal from "@/public/images/MerylLoungeChairTeal.svg";
import BeforeLike from "@/public/images/icons/before-like.svg";
import Icon from "@/components/UIComponents/Icon";
import SwiperCarousel from "@/app/swiper/swiperCarousel";

export default function Home() {
  return (
    <main className="container mx-auto px-8 bg-white max-h-screen mt-[2rem] mb-[3rem]">
      <div className="flex justify-between mb-3">
        <div>
          <Icon src={BackArrowButton} />
        </div>
        <div className="text-black text-[2rem]">
          01 <span className="text-2xl text-[#A2A3B1]">/05</span>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-sm text-[#A2A3B1]">
          Chair / <span className="text-black text-sm">Meryl Lounge Chair</span>
        </div>

        <div className="flex justify-between gap-20">
          <Icon src={BackSmallArrowButton} className="size-4" />
          <Icon src={ForwardSmallArrowButton} className="size-4" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center overflow-hidden">
        <ProductDetails />
        <div>
          <SwiperCarousel />
        </div>
      </div>
    </main>
  );
}
