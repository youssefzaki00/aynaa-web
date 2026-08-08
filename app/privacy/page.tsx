import PrivacyPageClient from "@/app/_components/PrivacyPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "سياسة الخصوصية",
  description:
    "تعرّف على كيفية تعامل عينا سلسبيلا مع بياناتك وخصوصيتك عند استخدام خدمات الحماية.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPageClient />;
}
