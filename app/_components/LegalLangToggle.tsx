"use client";

import { LegalLang, LEGAL_LANG_STORAGE_KEY } from "@/app/legal/legalConstants";
import { useEffect, useState } from "react";

type Props = {
  lang: LegalLang;
  onChange: (lang: LegalLang) => void;
};

export default function LegalLangToggle({ lang, onChange }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(LEGAL_LANG_STORAGE_KEY) as LegalLang | null;
    if (stored === "en" || stored === "ar") {
      onChange(stored);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLang = (next: LegalLang) => {
    localStorage.setItem(LEGAL_LANG_STORAGE_KEY, next);
    onChange(next);
  };

  if (!mounted) return null;

  return (
    <div className="flex justify-end gap-2 mb-6" dir="ltr">
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors cursor-pointer ${
          lang === "en"
            ? "bg-[#da442c] text-white"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("ar")}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors cursor-pointer ${
          lang === "ar"
            ? "bg-[#da442c] text-white"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        AR
      </button>
    </div>
  );
}
