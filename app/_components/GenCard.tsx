import Link from "next/link";
import React from "react";
import { genProps } from "../[gen]/genData";

function GenCard({ gen, ar, description, soon }: genProps) {
  return (
    <Link
      href={`/${gen === "gen2" ? "commingSoon" : "start"}`}
      className={`relative group p-6 lg:py-8 lg:px-12 duration-300 transform border border-gray-300 rounded-2xl shadow-lg flex flex-col justify-between text-center cursor-pointer transition-all
        ${
          soon
            ? "hidden"
            : "bg-gradient-to-br from-gray-50 to-gray-200 hover:shadow-2xl hover:-translate-y-3 active:scale-95"
        }
      `}
      style={{
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
        position: "relative",
      }}
    >
      {/* ✨ Floating Glow Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[95%] h-[95%] rounded-2xl bg-white bg-opacity-10 opacity-0 group-hover:opacity-50 transition-all duration-700 blur-2xl" />
      </div>

      {/* 💎 Soft Light Reflection */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-[60%] h-[20px] bg-white opacity-30 rounded-full blur-lg transition-all duration-500 group-hover:opacity-50" />

      {/* 🏆 Arabic Name (Bold & Elegant) */}
      <p className="text-3xl font-extrabold text-gray-900 mb-4 transition-all duration-300 group-hover:text-gray-800">
        {ar}
      </p>

      {/* 📜 Description */}
      <div className="text-md text-gray-700 flex flex-col gap-3 items-center justify-center transition-all duration-300">
        <p className="leading-relaxed">{description}</p>
      </div>

      {/* 🚀 "Coming Soon" Badge with Soft Glow */}
      {soon && (
        <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center px-6 py-3 tracking-wide text-white transition duration-300 shadow-lg bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full font-bold animate-pulse">
          قريبا بإذن الله 🚀
        </p>
      )}
    </Link>
  );
}

export default GenCard;
