import React from "react";
import setupValuesData from "./setupValuesData";
import { ArrowLeft, Eye } from "lucide-react";
import LinkButton from "../_components/LinkButton";

const SetupValuesComponent = () => {
  const protection = setupValuesData.protection;

  return (
    <section className="bg-white px-4 py-16 lg:py-20" dir="rtl">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-8">
        <div className="text-center">
          <h2 className="mb-3 font-bold text-2xl sm:text-3xl md:text-4xl text-[#1A1818]">
            تفاصيل الحماية
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            حماية واحدة شاملة لكل أجهزتك — بدون مستويات متعددة.
          </p>
        </div>

        <div className="w-full rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8F0F8]">
              <Eye className="text-[#D43820]" size={22} />
            </div>
            <h3 className="font-bold text-xl sm:text-2xl text-[#1A1818]">
              {protection.ar.title}
            </h3>
          </div>

          <p className="mb-5 text-right text-base sm:text-lg text-[#64748B] leading-relaxed">
            توفر لك حماية شاملة من جميع أنواع المحتوى غير المرغوب فيه، مما يضمن
            تجربة تصفح أكثر أمانًا وراحة مثل:
          </p>

          <div className="mb-8 flex flex-wrap gap-2 justify-start">
            {protection.categories.map((category) => (
              <span
                key={category}
                className="rounded-lg bg-[#FEE6E2] px-3 py-1.5 text-sm sm:text-base font-medium text-[#D43820]"
              >
                {category}
              </span>
            ))}
          </div>

          <LinkButton
            className="min-w-full"
            link="/start"
            content={
              <>
                <p>فعّل الحماية</p>
                <ArrowLeft size={20} className="mt-1" />
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default SetupValuesComponent;
