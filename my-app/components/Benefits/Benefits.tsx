"use client";

import Image from "next/image";
import { benefits} from "@/constants/Benefite";

export default function Benefits() {
  return (
    <div className="relative px-4 sm:px-6 lg:px-12 py-10 mt-12 mb-16 max-w-6xl mx-auto w-full">
      <h2 className="text-3xl font-bold text-black mb-6 text-center">
        Benefite të shumta
      </h2>

      <div className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-2">
        {/*benefit cards component*/}
        {benefits.map((item, id) => (
          <div
            key={id}
            className="min-w-[260px] sm:min-w-[280px] bg-white border rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition"
          >
            <Image
              src={item.image}
              alt={item.title}
              className="rounded-lg object-cover mb-4 w-full h-40 sm:h-48"
            />
            <h3 className="font-bold text-lg mb-2 text-black">{item.title}</h3>
            <p className="text-gray-700 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
