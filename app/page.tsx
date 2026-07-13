"use client";

import HeroSection from "./_components/HeroSection";
import OneVideo from "./_components/OneVideo";
import YourChildren from "./_components/YourChildren";
import FaqSection from "./_components/FaqSection";
import SetupValuesComponent from "./setupvalues/SetupValuesComponent";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Your Children */}
      <YourChildren />

      {/* Setup Values */}
      <SetupValuesComponent />

      {/* One video */}
      <OneVideo />

      {/* FAQ */}
      <FaqSection />
    </div>
  );
}
