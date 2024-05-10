// "use client";
// import React, { useCallback } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Image from "next/image";
// import backSmallArrowButton from "../../../../public/images/backSmallArrowButton.svg";
// import forwardSmallArrowButton from "../../../../public/images/forwardSmallArrowButton.svg";

// export default function EmblaCarousel({ images }) {
//   const [emblaRef, emblaApi] = useEmblaCarousel();

//   const scrollPrev = useCallback(() => {
//     if (emblaApi) emblaApi.scrollPrev();
//   }, [emblaApi]);

//   const scrollNext = useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext();
//   }, [emblaApi]);

//   return (
//     <div className="embla">

//       <div className="flex justify-between gap-20">
//         <button
//           className="embla__prev px-[0.563rem] py-[0.375rem]"
//           onClick={scrollPrev}
//         >
//           Prev
//         </button>
//         <button
//           className="embla__next px-[0.563rem] py-[0.375rem]"
//           onClick={scrollNext}
//         >
//           Next
//         </button>
//       </div>
//       <div className="embla__viewport" ref={emblaRef}>
//         <div className="embla__container">
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className="embla__slide border p-2 rounded-[5px] cursor-pointer"
//             >
//               <Image
//                 src={image}
//                 alt={`Slide ${index + 1}`}
//                 width={88}
//                 height={88}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "../../components/carouselThumbs";
import Image from "next/image";

const EmblaCarousel = (props) => {
  const { slides, options, images } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {images.map((image, index) => (
            // <div className="embla__slide" key={index}>
            //   <div className="embla__slide__number">{index + 1}</div>
            // </div>
            <div className="embla__slide embla__class-names" key={index}>
              <Image
                className="embla__slide__img"
                src={image}
                alt="Your alt text"
                width={200}
                height={200}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {slides.map((index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
