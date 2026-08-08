import TermsPageClient from "@/app/_components/TermsPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الشروط والأحكام",
  description:
    "اطّلع على شروط وأحكام استخدام خدمات عينا سلسبيلا لحماية الإنترنت والعائلة.",
};

export default function TermsOfUsePage() {
  return <TermsPageClient />;
}
