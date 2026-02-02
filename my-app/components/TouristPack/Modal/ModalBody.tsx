import NotesSection from "./NotesSection";
import ModalBenefits from "./ModalBenefits";
import { Dispatch, SetStateAction } from "react";

  interface ModalBodyProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  notes: string[];
  }

  export default function ModalBody({ setIsModalOpen, notes }: ModalBodyProps) {
    return (

      <div className="relative z-[100] bg-white rounded-lg shadow-lg w-full max-w-3xl p-4 sm:p-6">
        <NotesSection setIsModalOpen={setIsModalOpen} notes={notes} />
        <ModalBenefits />
      </div>
    );
    }