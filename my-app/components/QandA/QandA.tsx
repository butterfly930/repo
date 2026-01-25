"use client";
import { useState } from "react";

type FaqItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="border-b border-gray-300">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex justify-between items-center py-4 text-left text-lg font-medium text-gray-900"
      >
        <span className="text-black font-bold">{question}</span>

        <svg
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 pb-4" : "max-h-0"
        }`}
      >
        <p className="text-black">{answer}</p>
      </div>
    </div>
  );
}

export default function QandA() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs: FaqItemProps[] = [
    {
      question: "Pse duhet të blej një Paketë Turistike Dixhitale?",
      answer:
        "Një Paketë Turistike Dixhitale ofron një zgjidhje efektive me çmime më të ulëta se dyqanet fizike Vodafone, duke siguruar eksperiencë efikase për të gjitha nevojat tuaja të udhëtimit.",
    },
    {
      question: "Si mund ta aktivizoj kartën time Sim? A mund të shkoj në një nga dyqanet Vodafone?",
      answer:
        "Ju mund ta aktivizoni kartën tuaj SIM lehtësisht duke vizituar çdo dyqan Vodafone gjatë orarit të punës, duke siguruar një proces pa probleme. Vetëm sigurohuni që të jepni numrin tuaj të porosisë dhe detajet e gjetura në emailin tuaj të konfirmimit, si dhe një ID ose pasaportë të vlefshme për të marrë kartën tuaj SIM.",
    },
    {
      question: "A mund të përdor Paketën Turistike në Rajon?",
      answer:
        "Po, mund të përdorni Paketën e Turistit në rajonin e Ballkanit Perëndimor pa ndonjë kosto shtesë ose nevojë për të blerë paketë Roaming, pasi ofron të gjitha opsionet pa probleme në të gjithë zonën. Për më shumë informacion mbi detajet e roamingut në Ballkanin Perëndimor, ju lutemi referojuni: Roaming in Western Balkans | Vodafone",
    },
  ];
  
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 mb-20">
      <h1 className="text-3xl font-bold mb-6 text-black text-center">
        Pyetjet më të shpeshta
      </h1>

      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            question={faq.question} 
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </main>
  );
}
