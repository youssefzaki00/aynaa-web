"use client";

import { LegalLang } from "@/app/legal/legalConstants";
import { PrivacyContent } from "@/app/legal/privacyContent";
import { useState } from "react";
import LegalLangToggle from "./LegalLangToggle";

export default function PrivacyPageClient() {
  const [lang, setLang] = useState<LegalLang>("en");

  return (
    <div
      className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg my-8"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <LegalLangToggle lang={lang} onChange={setLang} />
      <PrivacyContent lang={lang} />
    </div>
  );
}
