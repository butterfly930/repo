import Image from "next/image";
import Check from "@/public/check.svg";
import { Dispatch, SetStateAction } from "react";

interface NotesSectionProps {
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    notes: string[];
}

export default function NotesSection({ setIsModalOpen, notes }: NotesSectionProps) {
    return (
        <>
        <div className="flex items-start justify-between gap-3 mb-3 sm:items-center">
          <h2 className="text-xl font-bold sm:text-2xl text-black">
            Shënime të rëndësishme
          </h2>
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            aria-label="Mbyll modalin"
            className="text-2xl sm:text-3xl text-black cursor-pointer"
          >
            X
          </button>
        </div>

        <ul className="space-y-4">
          {notes.map((note, id) => (
            <li key={id} className="flex items-start gap-4 md:gap-7 md:mb-6">
              <Image
                src={Check}
                alt="Check icon"
                width={24}
                height={24}
                className="flex-shrink-0 mt-1"
              />
              <p className="text-gray-700">{note}</p>
            </li>
          ))}
        </ul>
        </>
    )
}