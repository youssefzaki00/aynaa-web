"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { deviceParams } from "@/app/start/[device]/deviceData";
import EnterYourNumber from "./EnterYourNumber";

// Define a single color theme for all devices - changed to red
const unifiedColor = "from-red-500 to-red-600 shadow-red-400";

function DeviceCard({ device, soon }: deviceParams) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Device descriptions in Arabic
  const deviceDescriptions: { [key: string]: string } = {
    windows: "تطبيق يحمي الكمبيوتر",
    router: "يحمي كل الأجهزة المتصلة به",
    android: "تطبيق يحمي مشكلة الهاتف",
    ios: "تطبيق يحمي الآيفون",
    linux: "تطبيق يحمي اللينكس",
  };

  return (
    <>
      <div
        onClick={() => {
          if (device === "router") {
            setIsOpen(true);
            return;
          }
          if (soon) {
            router.push("/commingSoon");
          } else {
            router.push(`/start/${device}`);
          }
        }}
        className={`relative group p-4 sm:p-5 md:p-6 lg:px-10 duration-300 transform border border-gray-300 text-gray-900 shadow-lg rounded-[20px] sm:rounded-[25px] md:rounded-[30px] w-[220px] sm:w-[250px] md:w-[289px] h-[220px] sm:h-[250px] md:h-[289px] flex flex-col gap-3 sm:gap-4 md:gap-5 justify-center items-center transition-all
        ${
          soon
            ? "hidden"
            : `[background:linear-gradient(227.53deg,#E0462D_1.9%,#A73826_96.57%)] hover:shadow-2xl hover:-translate-y-2 active:scale-95`
        }
      `}
      >
        <div className="flex flex-col justify-center items-center gap-4 relative">
          {/* Floating Soft Glow Effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] rounded-full bg-opacity-30 opacity-0 group-hover:opacity-50 transition-all duration-500 blur-2xl ${unifiedColor}`}
            />
          </div>

          {/* Device Image */}
          <div className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] flex justify-center items-center transition-all duration-300 group-hover:scale-105">
            <Image
              src={`/devices/${device}.svg`}
              alt={device}
              className="object-contain drop-shadow-md transition-all duration-300"
              width={120}
              height={120}
            />
          </div>

          {/* Device Name */}
          <h3 className="text-base sm:text-lg md:text-xl font-bold capitalize text-white transition-all duration-300 group-hover:text-white">
            {device === "windows"
              ? "ويندوز"
              : device === "router"
              ? "راوتر"
              : device === "android"
              ? "أندرويد"
              : device}
          </h3>

          {/* Device Description */}
          <p className="text-xs sm:text-sm md:text-base text-white text-center">
            {deviceDescriptions[device] || ""}
          </p>
        </div>

        {/* "Coming Soon" Badge with Soft Pulse Effect */}
        {soon && (
          <p className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs md:text-sm text-white font-medium tracking-wide shadow-md bg-gray-800 rounded-full animate-pulse">
            Coming Soon 🚀
          </p>
        )}
      </div>

      {isOpen && <EnterYourNumber isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  );
}

export default DeviceCard;
