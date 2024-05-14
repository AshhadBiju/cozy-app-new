import Link from "next/link";
import Image from "next/image";
import Counter from "../app/components/Counter";
import Carousel from "../app/components/carousel/carousel";
import AddToCartButton from "../app/components/AddToCartButton";
import AddToWishlistButton from "../app/components/AddToWishlistButton";
import backArrowButton from "../../public/images/backArrowButton.svg";
import backSmallArrowButton from "../../public/images/backSmallArrowButton.svg";
import forwardSmallArrowButton from "../../public/images/forwardSmallArrowButton.svg";
import SmallArrowButton from "./components/SmallArrowButton";
import MerylLoungeChairTeal from "../../public/images/MerylLoungeChairTeal.png";
import SocialMediaLinks from "../app/components/SocialMediaLinks";
import item1 from "../../public/images/carouselSlides/item-1.svg";
import item2 from "../../public/images/carouselSlides/item-2.svg";
import item3 from "../../public/images/carouselSlides/item-3.svg";
import item4 from "../../public/images/carouselSlides/item-4.svg";
import item5 from "../../public/images/carouselSlides/item-5.svg";
import ColorComponents from "../app/components/colorSelector";

const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const images = [item1, item2, item3, item4, item5];
const thumbs = [item1, item2, item3, item4, item5];
const colors = ["#C1BDB3", "#58737D", "#545454", "#CBA5A5"];

export default function Home() {
  return (
    <main className="container mx-auto px-4 bg-white max-h-screen mt-[3.375rem] mb-[3.5rem]">
      <div className="flex justify-between mb-3">
        <div>
          <Image
            src={backArrowButton}
            alt="No button"
            width={24}
            height={24}
            className=""
          />
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
          <SmallArrowButton
            arrowButton={backSmallArrowButton}
            alt="No button"
          />
          <SmallArrowButton
            arrowButton={forwardSmallArrowButton}
            alt="No button"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center overflow-hidden">
        <div className="w-full md:w-[33%]">
          <h2 className="text-[2.75rem] font-semibold mb-2">
            Meryl Lounge Chair
          </h2>
          <div className="flex flex-col md:flex-row justify-between mt-6 mb-12">
            <div>
              <span>$</span>
              149.99
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="text-yellow-500">★★★★★</div>
              <div className="text-gray-500">
                4.6 / 5.0 <span>(556)</span>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-base ">
            The gently curved lines accentuated by sewn details are kind to your
            body and pleasant to look at. Also, there’s a tilt and
            height-adjusting mechanism that’s built to outlast years of ups and
            downs.
          </p>
          {/* <div className="flex gap-4 my-9">
            <div className="bg-[#C1BDB3] rounded-full p-[0.670rem]"></div>
            <div className="bg-[#58737D] rounded-full p-[0.670rem]"></div>
            <div className="bg-[#545454] rounded-full p-[0.670rem]"></div>
            <div className="bg-[#CBA5A5] rounded-full p-[0.670rem]"></div>
          </div> */}
          <div>
            <ColorComponents colors={colors} />
          </div>
          <div className="flex gap-6">
            <div>
              <Counter />
            </div>
            <AddToCartButton cartText="Add to Cart" />
          </div>
          <ul className="text-base flex list-disc gap-9 mt-8 mb-20">
            <li className="list-none">Free 3-5 day shipping</li>
            <li>Tool-free assembly</li>
            <li>30-day trial</li>
          </ul>
          <div className="flex justify-between">
            <AddToWishlistButton addToText="Add to Wishlist" />
            <SocialMediaLinks />
          </div>
        </div>
        <div>
          <div className="w-fit flex items-center overflow-hidden">
            <div className="z-10">
              <Image
                // className="w-full h-auto mx-auto"
                src={MerylLoungeChairTeal}
                alt="Chair"
                width={254}
                height={451}
                sizes="(min-width: 1040px) 254px, (min-width: 780px) 147px, 254px"
                priority={true}
              />
            </div>
            <div className="lg:min-w-[25.5rem] md:min-w-[25.5rem] min-w-0 h-[15.625rem] bg-gradient-to-r from-white to-teal-100 hidden md:block overflow-hidden"></div>
          </div>
          {/* <div>
            <Carousel images={images} />
          </div> */}
          {/* <Carousel
            slides={SLIDES}
            images={images}
            options={OPTIONS}
            thumbs={thumbs}
          /> */}
        </div>
      </div>
    </main>
  );
}
