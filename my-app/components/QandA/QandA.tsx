"use client";
import { useState } from "react";
import clsx from "clsx";
import { FaqItemProps, faqs } from "@/constants/FaqItemProps";
import { DropDown } from "../../public/icons/DropdownIcon";

function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState<boolean>(false);
  const onClick = () => setOpen(!open);
  return (
    <div className="border-b border-gray-300">
       <button
        type="button"
        onClick={onClick}
        className="w-full flex justify-between text-black items-center py-4 text-left text-lg font-medium text-gray-900"
      >
        <span>{question}</span>
        <DropDown className={open ? "rotate-180" : ""} />

      </button>
      <div
        className={clsx(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-40 pb-4" : "max-h-0"
        )}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
}

export default function QandA() {
  return (
    <main className="max-w-3xl mx-auto text-black px-6 py-12 mb-20">
      <h1 className="text-3xl font-bold text-center mb-6">
        Pyetjet më të shpeshta
      </h1>

      <div className="space-y-2">
        {faqs.map((faq) => (
          <FaqItem key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </main>
  );
}
