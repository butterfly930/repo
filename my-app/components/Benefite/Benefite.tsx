"use client";

import { useRef } from "react";

const benefits = [
  {
    title: "Bli online dhe përfito 20% zbritje!",
    description: "Duke blerë një paketë turist online, ju përfitoni (deri në 20%) çmime më të ulëta nga dyqanet fizike Vodafone.",
  },
  {
    title: "Behu pjesë e rrjetit Nr 1 Në Shqipëri",
    description: "Përjeto eksperiencën në rrjetin më të mirë fiks dhe celular në vend. ",
  },
  {
    title: "Përfito zbritje të personalizuara",
    description: "Bli tani online dhe përfito zbritje të shumta në shumë partnerë të Vodafone, vetëm në aplikacionin My Vodafone.",
  },

];

export default function Benefite() {

  return (
    <div className="relative  px-6 py-10 ml-30 mr-30 mb-20 mt-20" >
      <h2 className="text-3xl font-bold text-black mb-6 text-center">
        Benefite të shumta
      </h2>


      {/* Carousel */}
      <div
        className="flex gap-7 overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {benefits.map((item, index) => (
          <div
            key={index}
            className="min-w-[280px] bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-bold text-lg mb-2 text-black">
              {item.title}
            </h3>
            <p className="text-gray-700 text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>

     
    </div>
     
  );
}
