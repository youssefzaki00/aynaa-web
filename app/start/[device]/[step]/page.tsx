import { deviceName } from "@/app/[gen]/genData";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import stepData, { Step, stepName } from "./stepData";

const StepPage = ({
  params,
}: {
  params: { step: stepName; device: deviceName };
}) => {
  const devSteps = (stepData.gen1 as any)?.[params.device];

  if (!devSteps) {
    return (
      <p className="text-red-500 text-center font-bold text-lg">
        ⚠️ لا توجد بيانات لهذا الجهاز.
      </p>
    );
  }

  const totalSteps = Object.keys(devSteps).length;
  const currentStep = Number(params.step.replace("step", ""));
  const isLastStep = currentStep === totalSteps;
  const substeps: Step[] = devSteps[params.step] || [];

  // Get device name in Arabic
  const deviceNames: Record<string, string> = {
    router: "حمايه الراوتر",
    windows: "حماية الويندوز",
    android: "حماية الأندرويد",
  };

  // Get step number in Arabic
  const stepNumbers: Record<number, string> = {
    1: "الخطوه الاولي",
    2: "الخطوه الثانيه",
    3: "الخطوه الثالثه",
    4: "الخطوه الرابعه",
    5: "الخطوه الخامسه",
  };

  // Process steps to group text, screenshots, and links
  const processedSteps: Array<{
    type: "text" | "screenshot" | "link";
    data: any;
    index: number;
    linkData?: { href: string; text: string };
  }> = [];
  let textIndex = 0;

  substeps.forEach((step, idx) => {
    if (step.type === "text") {
      textIndex++;
      processedSteps.push({
        type: "text",
        data: step.data,
        index: textIndex,
      });
    } else if (step.type === "screenshot") {
      processedSteps.push({
        type: "screenshot",
        data: step.data,
        index: 0,
      });
    } else if (step.type === "link") {
      processedSteps.push({
        type: "link",
        data: (step.data as any).text,
        index: 0,
        linkData: step.data as { href: string; text: string },
      });
    }
  });

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-col lg:max-w-[1216px] mx-auto w-full px-4 lg:px-16 pt-20 lg:pt-[94px] pb-10 lg:pb-20 gap-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-4">
          <Link
            href={`/start/${params.device}`}
            className="font-normal text-[22px] text-[#D43820] leading-[1.563] hover:opacity-80 transition-opacity"
          >
            {deviceNames[params.device] || params.device}
          </Link>
          <ChevronLeft size={24} className="text-black" strokeWidth={2} />
          <span className="font-normal text-[22px] text-[#7A706F] leading-[1.563]">
            خطوات تفعيل الراوتر
          </span>
        </div>

        {/* Step Title */}
        <h2 className="font-bold text-right text-[43px] text-[#1A1818] leading-[1.563]">
          {stepNumbers[currentStep] || `الخطوة ${currentStep}`}
        </h2>

        {/* Content Section */}
        <div className="flex flex-col gap-8">
          {processedSteps.map((item, idx) => {
            if (item.type === "text") {
              const textContent = item.data?.toString() || "";
              const isStep3SupportCard =
                currentStep === 3 &&
                item.index === 3 &&
                textContent.includes("راسلنا على البريد");

              if (isStep3SupportCard) {
                const nextLink = processedSteps[idx + 1];
                return (
                  <div
                    key={idx}
                    className="w-full rounded-lg border-2 flex flex-col gap-6 p-8"
                    style={{
                      backgroundColor: "#F8FAFC",
                      borderColor: "#CBD5E1",
                    }}
                  >
                    <div className="flex items-start gap-6">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "#D43820" }}
                      >
                        <span className="font-normal text-[20px] text-white leading-[1em]">
                          {item.index}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="font-normal text-right text-[22px] text-[#1A1818] leading-[1.563]">
                          {textContent}
                        </p>
                      </div>
                    </div>

                    {nextLink?.type === "link" && nextLink.linkData && (
                      <div className="flex pr-[53px]">
                        <Link
                          href={nextLink.linkData.href}
                          className="flex items-center justify-center gap-3 border border-[#E0462D] text-[#E0462D] px-6 py-5 rounded-[8px] font-bold text-[18px] hover:opacity-90 transition-opacity"
                        >
                          <MessageSquareText
                            size={24}
                            className="text-[#E0462D]"
                          />
                          <span>{nextLink.linkData.text}</span>
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              const isStep3DnsCard =
                currentStep === 3 &&
                textContent.includes("Primary DNS");

              if (isStep3DnsCard) {
                const learnMoreLink = processedSteps.find(
                  (s) =>
                    s.type === "link" && s.linkData?.href === "/setupvalues"
                );

                return (
                  <div
                    key={idx}
                    className="w-full rounded-lg border-2 flex flex-col gap-6 p-8"
                    style={{
                      backgroundColor: "#F8FAFC",
                      borderColor: "#CBD5E1",
                    }}
                  >
                    <div className="flex items-start gap-6">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "#D43820" }}
                      >
                        <span className="font-normal text-[20px] text-white leading-[1em]">
                          {item.index}
                        </span>
                      </div>
                      <div
                        className="w-full rounded-lg border-2 p-6 flex flex-col gap-2"
                        style={{
                          backgroundColor: "#F0FDF4",
                          borderColor: "#16A34A",
                        }}
                      >
                        <p className="font-normal text-right text-[22px] text-[#1A1818] leading-[1.563]">
                          {textContent
                            .split("\n")
                            .map((line: string, i: number) => (
                              <React.Fragment key={i}>
                                {line}
                                {i < textContent.split("\n").length - 1 && (
                                  <br />
                                )}
                              </React.Fragment>
                            ))}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <ShieldCheck
                            size={24}
                            className="text-[#D43820] flex-shrink-0"
                          />
                          <p className="font-bold text-[18px] text-[#D43820] leading-[1.563] text-right">
                            حماية شاملة ضد الإباحية والقمار والتطبيقات الضارة على
                            كل الأجهزة المتصلة بالراوتر
                          </p>
                        </div>
                      </div>
                    </div>

                    {learnMoreLink?.linkData && (
                      <Link
                        href={learnMoreLink.linkData.href}
                        className="flex items-center gap-3 text-[#E0462D] font-bold text-[18px] py-5 hover:opacity-90 transition-opacity"
                      >
                        <ShieldCheck
                          size={24}
                          className="text-[#E0462D] flex-shrink-0"
                        />
                        <span className="underline">
                          {learnMoreLink.linkData.text.replace(" ➡️", "")}
                        </span>
                      </Link>
                    )}
                  </div>
                );
              }

              // Regular Text Card
              return (
                <div
                  key={idx}
                  className="w-full rounded-lg border-2 flex items-start gap-6 p-8"
                  style={{
                    backgroundColor: "#F8FAFC",
                    borderColor: "#CBD5E1",
                  }}
                >
                  {/* Number Badge */}
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#D43820" }}
                  >
                    <span className="font-normal text-[20px] text-white leading-[1em]">
                      {item.index}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-normal text-right text-[22px] text-[#1A1818] leading-[1.563]">
                      {textContent
                        .split("\n")
                        .map((line: string, i: number) => (
                          <React.Fragment key={i}>
                            {line}
                            {i < textContent.split("\n").length - 1 && <br />}
                          </React.Fragment>
                        ))}
                    </p>
                  </div>
                </div>
              );
            } else if (item.type === "screenshot") {
              return (
                <div key={idx} className="w-full">
                  <Image
                    alt="screenshot"
                    src={`/setupguide/gen1/${params.device}/${params.step}_${item.data}.png`}
                    width={1088}
                    height={459}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
              );
            } else if (item.type === "link") {
              // Skip link rendering - they're handled within cards (card 3 support button, card 4 learn more)
              return null;
            }
            return null;
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center gap-2 lg:gap-4 mt-8">
          {/* Previous Button */}
          {currentStep > 1 ? (
            <Link
              href={`/start/${params.device}/step${
                currentStep - 1
              }`}
              className="flex items-center justify-center gap-3 border border-[#1A1818] text-[#1A1818] px-2 lg:px-6 py-5 rounded-[8px] font-bold text-lg hover:opacity-90 transition-opacity"
            >
              <ArrowRight size={24} />
              <span>الخطوه السابقة</span>
            </Link>
          ) : (
            <div></div>
          )}

          {/* Next Button */}
          {!isLastStep ? (
            <Link
              href={`/start/${params.device}/step${
                currentStep + 1
              }`}
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#E0462D] to-[#A73826] text-white px-2 lg:px-6 py-5 rounded-[8px] font-bold text-lg hover:opacity-90 transition-opacity"
            >
              <span>الخطوه التالية</span>
              <ArrowLeft size={24} />
            </Link>
          ) : (
            <Link
              href="/congratulations"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#E0462D] to-[#A73826] text-white px-2 lg:px-6 py-5 rounded-[8px] font-bold text-lg hover:opacity-90 transition-opacity"
            >
              <span>الخطوه التالية</span>
              <ArrowLeft size={24} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepPage;

export function generateStaticParams() {
  return Object.keys(stepData.gen1).flatMap((device) => {
    const steps = Object.keys(stepData.gen1[device as deviceName] || {});

    if (steps.length < 15) {
      for (let i = steps.length + 1; i <= 15; i++) {
        steps.push(`step${i}`);
      }
    }

    return steps.map((step) => ({
      device,
      step,
    }));
  });
}
