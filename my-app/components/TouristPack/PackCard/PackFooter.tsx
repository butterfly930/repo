import React, { useState } from "react";
import { Dispatch, SetStateAction } from "react";

interface PackFooterProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function PackFooter({ setIsModalOpen }: PackFooterProps) {
  return (
    <div className="p-[25px] flex flex-col gap-3">
      <button className="w-full bg-[#e60000] text-white border-none py-[15px] rounded-[8px] text-[16px] font-light cursor-pointer hover:bg-[#cc0000] disabled:bg-[#ccc] disabled:cursor-not-allowed">
        Zgjidh Planin
      </button>
      <button
        onClick={() => setIsModalOpen(true)}
        className="underline text-[14px] text-[#ccc] hover:text-[#e60000] text-center"
      >
        Më shumë detaje
      </button>
    </div>
  );
}
