import React, { useState } from "react";
import { Dispatch, SetStateAction } from "react";

interface PackFooterProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function PackFooter({ setIsModalOpen }: PackFooterProps) {
  return (
    <div className="mt-6 flex flex-col gap-3">
      <button className="px-5 py-2 bg-red-600 text-white rounded hover:opacity-80">
        Zgjidh Planin
      </button>
      <button
        onClick={() => setIsModalOpen(true)}
        className="underline text-sm text-red-600 hover:text-black text-center"
      >
        Më shumë detaje
      </button>
    </div>
  );
}
