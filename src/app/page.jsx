"use client";
import { useEffect } from "react";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import BackArrowButton from "@/public/images/icons/backArrowButton.svg";
import BackSmallArrowButton from "@/public/images/backSmallArrowButton.svg";
import ForwardSmallArrowButton from "@/public/images/forwardSmallArrowButton.svg";
import Icon from "@/components/UIComponents/Icon";
import SwiperCarousel from "@/app/swiper/swiperCarousel";
import { APIBASEURL } from "@/config/apiConfigs";
import ProductEndpoints from "@/API/products/index";

export default function Home() {
  useEffect(() => {
    fetch(APIBASEURL + ProductEndpoints.getProducts.path)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);
  return (
    <main className="container mx-auto px-8 bg-white max-h-screen mt-[2rem] mb-[3rem]">
      <div className="flex justify-between mb-3">
        <div>
          <Icon src={BackArrowButton} />
        </div>
        <div className="text-black text-[2rem]">
          01 <span className="text-2xl text-textSecondary">/05</span>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-sm text-textSecondary">
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
