"use client";
import EnterYourNumber from "@/app/_components/EnterYourNumber";
import { useState } from "react";

export default function OpenEnterYourNumberBtn({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="min-w-72 text-center bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
      >
        {children || "إدخل رقم هاتفك"}
      </button>

      {isOpen && (
        <EnterYourNumber onClose={() => setIsOpen(false)} isOpen={isOpen} />
      )}
    </>
  );
}
