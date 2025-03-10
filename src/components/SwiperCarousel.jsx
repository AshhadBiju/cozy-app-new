"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { slides } from "@/src/lib/slides";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function Slides() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="py-12 w-[52.75rem] ">
      <div className="container">
        <Swiper
          loop={true}
          spaceBetween={10}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="h-96 rounded-lg z-10"
        >
          {slides.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full items-center justify-center ">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="block h-full w-full"
                />
                <div className="lg:min-w-[25.5rem] md:min-w-[25.5rem] min-w-0 h-[15.625rem] bg-gradient-to-r from-white to-teal-100 hidden md:block overflow-hidden"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/**Thumbnail */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={0}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="thumbs mt-3 h-full w-3/4 rounded-lg mySwiper"
        >
          {slides.map((image, index) => (
            <SwiperSlide key={index}>
              <button className="flex h-full w-full items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className=" size-24 border border-[D1D1D8] rounded-lg p-2 inline-block transform transition duration-400 ease-in-out hover:scale-105 cursor-pointer"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
