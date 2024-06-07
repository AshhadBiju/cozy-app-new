"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { slides } from "@/lib/slides";
import "swiper/css";
import Image from "next/image";

export default function Slides() {
  return (
    <section className="py-12">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-full w-full items-center justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                className="block h-full w-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
