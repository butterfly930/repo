"use client";

import { useRef } from "react";
import Albania1 from "../../public/Albania1.jpg";
import Albania2 from "../../public/Albania2.jpg";
import Albania3 from "../../public/Albania3.jpg";
import PackCard from "../PackCard";
import { fetchTouristPacks } from "@/lib/api";

export async function TouristPack() {
  const packs = await fetchTouristPacks();
  const packImages = [Albania1, Albania2, Albania3];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 320; // width of one card
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full px-4 md:px-0 md:w-3/4 mx-auto">
      <section className="relative">
        {/* Title */}
        <h2 className="text-black font-semibold text-3xl mb-8">
          Zgjidh Planin
        </h2>

        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full border bg-white shadow"
        >
          ‹
        </button>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
        >
          {packs.map((pack, index) => (
            <div
              key={index}
              className="snap-start shrink-0 w-[300px]"
            >
              <PackCard
                title={pack.title}
                subtitle={pack.subtitle}
                price={pack.price}
                duration={pack.duration}
                features={pack.features}
                image={packImages[index % packImages.length]}
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full border bg-white shadow"
        >
          ›
        </button>
      </section>
    </div>
  );
}
