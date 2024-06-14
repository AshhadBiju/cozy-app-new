"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
import { slides } from "@/src/lib/slides";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

export default function Slides() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="py-12 w-full">
      <div>
        <Swiper
          loop={true}
          spaceBetween={20}
          slidesPerView={4}
          navigation={true}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          breakpoints={{
            375: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[FreeMode, Navigation, Thumbs, Pagination]}
          className="h-[469px] rounded-lg z-10 w-full"
        >
          {slides.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full items-center justify-center flex-col gap-4 ">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="block h-[296px] w-full"
                />
                <div className="text-xl font-medium">{image.productName}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/**Thumbnail */}
        {/* <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={12}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="thumbs mt-3 h-full w-[616px] rounded-lg mySwiper"
        >
          {slides.map((image, index) => (
            <SwiperSlide key={index}>
              <button className="flex h-full w-full items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className=" h-[104px] w-[104px] border border-[D1D1D8] rounded-lg p-2 inline-block transform transition duration-400 ease-in-out hover:scale-105 cursor-pointer"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
    </section>
  );
}
