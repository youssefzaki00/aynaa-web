"use client";

import { LegalLang } from "@/app/legal/legalConstants";
import { TermsContent } from "@/app/legal/termsContent";
import { useState } from "react";
import LegalLangToggle from "./LegalLangToggle";

export default function TermsPageClient() {
  const [lang, setLang] = useState<LegalLang>("en");

  return (
    <div
      className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg my-8"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <LegalLangToggle lang={lang} onChange={setLang} />
      <TermsContent lang={lang} />
    </div>
  );
}
