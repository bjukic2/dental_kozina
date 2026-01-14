"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const images = [1, 2, 3, 4, 5, 6];

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* VIEWPORT */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((i) => (
            <div
              key={i}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] p-2"
            >
              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={`/images/gallery-${i}.jpg`}
                  alt={`Slika ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/70 p-3 rounded-full hover:bg-gray-700 transition cursor-pointer"
      >
        <ChevronLeft size={24} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/70 p-3 rounded-full hover:bg-gray-700 transition cursor-pointer"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
