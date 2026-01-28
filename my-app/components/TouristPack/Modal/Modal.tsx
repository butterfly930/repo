"use client";
import { notes } from "@/constants/ModalConstant";
import ModalBody from "./ModalBody";
import { Dispatch, SetStateAction } from "react";

interface ModalProps {
  // setIsModalOpen: (isOpen: boolean) => void;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({ setIsModalOpen }: ModalProps) {
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="fixed inset-0 z-[99] bg-gray-900/60 backdrop-blur-md"
        onClick={() => setIsModalOpen(false)}
      />
      <ModalBody setIsModalOpen={setIsModalOpen} notes={notes} />
    </div>
  );
}
