"use client";
import Image from "next/image";
import { useState } from "react";
import Modal from "@/components/TouristPack/Modal/Modal";
import PackHeader from "./PackHeader";
import PackCardProps from "../../../types/tourist-pack";
import PackFeatures from "./PackFeatures";
import PackFooter from "./PackFooter";
import { getIconForFeature, parseFeature } from "@/constants/PackCardConst";
import VFsmallIconPack from "@/public/VFsmallIconPack.png";

export default function PackCard({
  title,
  price,
  subtitle,
  duration,
  features,
  image,
}: PackCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="mb-20 min-w-[340px] md:min-w-[600px] bg-white rounded-lg shadow-md overflow-hidden grid grid-cols-[200px_1fr]">
        {/* LEFT IMAGE */}
        <div className="relative md:h-full w-full">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="p-4 md:p-6 flex flex-col justify-between cursor-pointer">
          <div className="flex items-center gap-2 mb-4 bg-gray-100 md:p-3 rounded-md">
            <Image
            src={VFsmallIconPack}
            alt="VF Small Icon for Tourist Pack"
            width={30}
            height={30}
            className="md:w-[30px] md:h-[30px] flex-shrink-0"
            />
            <h2 className="text-xs md:text-xs mb-2 text-black">
              Përfito akses në zbritje të shumta në partnerët e Vodafone (kafene, restorante, transport dhe shumë më tepër)
            </h2>
          </div>
          <PackHeader
            title={title}
            price={price}
            subtitle="Shijo komunikim të pandërprerë dhe navigo në rrjetin më të mirë në Shqipëri!"
            duration={duration}
            features={features}
            image={image}
          />
          <PackFeatures
            features={features}
            getIconForFeature={getIconForFeature}
            parseFeature={parseFeature}
          />
          <PackFooter setIsModalOpen={setIsModalOpen} />
        </div>
      </div>

      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </>
  );
}
