"use client";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export default function Modal ({
    isOpen, 
    onClose, 
    title, 
    children,
}: ModalProps) {
    if(!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50"
            onClick={onClose} />
            <div className="relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-semibold text-black">{title}</h2>

        <div className="mb-6 text-gray-700">{children}</div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
    )
}