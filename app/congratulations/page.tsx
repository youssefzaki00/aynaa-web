import setupGuideData, { SetupGuideData } from "@/app/start/setupGuideData";
import OtherDevicesSection from "@/app/_components/OtherDevicesSection";
import { CircleCheckBig, Shield } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "تم تفعيل الحماية",
  description:
    "مبروك! تم تفعيل حماية عينا سلسبيلا بنجاح. تعرف على الخطوات التالية وتفعيل الحماية على أجهزة أخرى.",
};

export default function CongratulationsPage() {
  const setupGuide: SetupGuideData = setupGuideData;
  const otherDevices = setupGuide.devices.filter(
    (device) => ["windows", "android"].includes(device.device)
  );

  return (
    <div className="max-w-[1125px] mx-auto pt-20  md:pt-[94px]">
      <div className="flex flex-col min-h-screen md:rounded-t-2xl rounded-b-lg overflow-hidden bg-white ">
        {/* Red Banner Section */}
        <section
          className="w-full py-12 lg:pb-16"
          style={{
            background: "linear-gradient(180deg, #E0462D 0%, #A73826 100%)",
          }}
        >
          <div className="flex flex-col items-center gap-6 px-4 max-w-screen-2xl mx-auto w-full">
            {/* Checkmark Icon */}

            <CircleCheckBig size={64} className="text-white" strokeWidth={3} />

            {/* Main Title */}
            <h1 className="font-bold text-3xl md:text-4xl lg:text-H1 text-white text-center leading-[1.563]">
              مبروك! تم تفعيل الحماية بنجاح
            </h1>

            {/* Subtitle */}
            <p className="font-normal text-lg md:text-xl lg:text-[22px] text-white text-center leading-[1.563] max-w-[817px]">
              حسابك الآن محمي بالكامل. نحن نعمل على مدار الساعة لضمان أمان
              بياناتك وخصوصيتك.
            </p>
          </div>
        </section>

        {/* Main Content Section */}
        <div className="flex flex-col lg:max-w-[1216px] mx-auto w-full px-4 lg:px-16 pb-10 lg:pb-20 gap-8">
          {/* Verification Section */}
          <div className="flex flex-col items-center gap-6 py-8">
            {/* Shield Icon */}
            <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
              <Shield
                size={128}
                className="text-green-400"
                strokeWidth={1.5}
                fill="none"
              />
            </div>

            {/* Verification Text */}
            <p className="font-normal text-lg md:text-xl lg:text-[22px] text-[#1A1818] text-center leading-[1.563]">
              تستطيع التأكد من ان تم تفعيل الحماية{" "}
              <Link
                href="https://google.com/safesearch"
                className="text-[#D43820] hover:opacity-80 transition-opacity underline"
                target="_blank"
              >
                بالضغط هنا
              </Link>
            </p>
          </div>

          {/* Troubleshooting Section */}
          <div className="flex flex-col gap-8">
            {/* Section Title */}
            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-[#D43820] rounded-full"></div>
              <h2 className="font-bold text-xl md:text-2xl lg:text-[43px] text-right text-[#1A1818] leading-[1.563]">
                ماذا تفعل في حال فشل التفعيل؟
              </h2>
            </div>

            {/* Troubleshooting Cards */}
            <div className="flex flex-col gap-6">
              {/* Step 1 */}
              <div
                className="w-full rounded-lg border-2 flex items-start gap-6 p-8"
                style={{
                  backgroundColor: "#F8FAFC",
                  borderColor: "#CBD5E1",
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#D43820" }}
                >
                  <span className="font-normal text-[20px] text-white leading-[1em]">
                    1
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-right text-lg md:text-xl text-[#1A1818] leading-[1.563] mb-2">
                    تحقق من الاتصال بالإنترنت
                  </h3>
                  <p className="font-normal text-right text-base md:text-lg text-[#7A706F] leading-[1.563]">
                    تأكد من أن جهازك متصل بالإنترنت بشكل مستقر وحاول مرة أخرى.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div
                className="w-full rounded-lg border-2 flex items-start gap-6 p-8"
                style={{
                  backgroundColor: "#F8FAFC",
                  borderColor: "#CBD5E1",
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#D43820" }}
                >
                  <span className="font-normal text-[20px] text-white leading-[1em]">
                    2
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-right text-lg md:text-xl text-[#1A1818] leading-[1.563] mb-2">
                    أعد تسجيل الدخول
                  </h3>
                  <p className="font-normal text-right text-base md:text-lg text-[#7A706F] leading-[1.563]">
                    قم بتسجيل الخروج ثم تسجيل الدخول مرة أخرى وحاول تفعيل
                    الحماية.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div
                className="w-full rounded-lg border-2 flex items-start gap-6 p-8"
                style={{
                  backgroundColor: "#F8FAFC",
                  borderColor: "#CBD5E1",
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#D43820" }}
                >
                  <span className="font-normal text-[20px] text-white leading-[1em]">
                    3
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-right text-lg md:text-xl text-[#1A1818] leading-[1.563] mb-2">
                    راجع إعدادات حسابك
                  </h3>
                  <p className="font-normal text-right text-base md:text-lg text-[#7A706F] leading-[1.563]">
                    تأكد من اكتمال جميع المعلومات المطلوبة في ملفك الشخصي.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Other Devices Section */}
      <OtherDevicesSection devices={otherDevices} />
    </div>
  );
}
