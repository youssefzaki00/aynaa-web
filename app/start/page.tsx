import StartHeroSection from "@/app/_components/StartHeroSection";
import StartSecondSection from "@/app/_components/StartSecondSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ابدأ الحماية",
  description:
    "فعّل حماية عينا سلسبيلا على الأندرويد أو الويندوز أو الراوتر لحجب المواقع والمحتوى الضار عن عائلتك.",
  openGraph: {
    title: "ابدأ الحماية | عينا سلسبيلا",
    description:
      "فعّل الحماية على الأندرويد أو الويندوز أو الراوتر لحجب المواقع والمحتوى الضار.",
    url: "/start",
  },
};

function StartGuidePage() {
  return (
    <div>
      <StartHeroSection />
      <StartSecondSection />
    </div>
  );
}

export default StartGuidePage;
