import Button from "@/src/components/UIComponents/Button";
import Icon from "@/src/components/UIComponents/Icon";
import Swiper from "@components/SwiperCarouselHome";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="./videos/lendIt-gif.gif"
            alt="Background GIF"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative z-10 flex h-full items-center justify-center p-6">
          <h1 className="text-4xl font-bold text-white md:text-6xl">
            <span className="italic text-primary"> Cozy</span>, your one stop
            shop for your home
          </h1>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </section>

      <section className="py-16 px-8 md:px-16 w-full">
        <h1 className="text-4xl">Trending Products</h1>
        <div>
          <Swiper />
        </div>

        <Link
          className="inline-block transform transition duration-400 ease-in-out hover:scale-105 hover:text-primaryHover cursor-pointer"
          href="/products"
        >
          <Icon text="See more" textClassName="text-primary" />
        </Link>
      </section>
    </>
  );
}
