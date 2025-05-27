import { useState } from "react";
import Image from "next/image";

const images = [
  "/new/IMG_0196.JPG",
  "/new/IMG_0199.JPG",
  "/new/IMG_0173.JPG",
];

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <article className="w-full h-[66vh] relative my-10 overflow-hidden rounded-xl">
      {/* Image slider container */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full w-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div className="relative w-full h-[66vh] flex-shrink-0" key={index}>
            <Image
              src={src}
              alt={`Banner ${index + 1}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        ))}
      </div>

      {/* Click zones */}
      <div
        className="absolute left-0 top-0 w-1/2 h-full z-20 cursor-pointer"
        onClick={goToPrev}
      />
      <div
        className="absolute right-0 top-0 w-1/2 h-full z-20 cursor-pointer"
        onClick={goToNext}
      />

      {/* Arrows (optional visual feedback) */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 z-30 text-white text-xl pointer-events-none select-none">
        ◀
      </div>
      <div className="absolute top-1/2 right-4 -translate-y-1/2 z-30 text-white text-xl pointer-events-none select-none">
        ▶
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2 z-30">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? "bg-white" : "bg-white/40"
              }`}
          />
        ))}
      </div>
    </article>
  );
}
