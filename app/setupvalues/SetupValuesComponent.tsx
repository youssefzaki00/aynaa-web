import React from "react";
import setupValuesData from "./setupValuesData";
import { ArrowLeft, Check, Shield } from "lucide-react";
import LinkButton from "../_components/LinkButton";

const SetupValuesComponent = () => {
  const protection = setupValuesData.gen1.protection;

  return (
    <div className="flex flex-col items-center gap-10 bg-white px-4 py-20">
      <div className="mb-6 sm:mb-8 text-center">
        <h1 className="mb-2 font-bold text-2xl sm:text-3xl md:text-4xl">
          الحماية المتاحة
        </h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl">
          حماية واحدة شاملة ضد الإباحية والقمار والتطبيقات الضارة — على المواقع
          والتطبيقات.
        </p>
      </div>

      <div className="flex justify-center mx-auto px-6 pt-8 w-full max-w-5xl">
        <div className="relative bg-white shadow-md border-2 border-red-500 rounded-xl w-full md:max-w-[30rem] min-h-[28rem] overflow-hidden">
          <div className="p-4 sm:p-6 md:p-8 text-right">
            <h2 className="flex items-center gap-2 mb-4 font-bold text-2xl sm:text-3xl">
              <Shield size={24} className="translate-y-1" />
              <span>{protection.ar.title}</span>
            </h2>

            <p className="mb-6 text-gray-700 md:text-[20px] text-base sm:text-lg text-right leading-[1.5]">
              تحجب المحتوى الإباحي ومواقع القمار والتطبيقات الضارة. على الراوتر
              تُطبَّق الحماية على كل الأجهزة المتصلة بالشبكة. على الهاتف والكمبيوتر
              تُفعَّل عبر تطبيق عينا سلسبيلا.
            </p>

            <div className="flex flex-col justify-start gap-4 mb-24">
              {protection.categories.map((category, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 px-2 sm:px-3 py-1 font-bold text-red-600 text-base"
                >
                  <Check size={20} />
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="bottom-0 left-0 right-0 absolute px-6 sm:px-10 py-6">
            <LinkButton
              className="min-w-full"
              link="/setupguide"
              content={
                <>
                  <p>فعّل الحماية</p>
                  <ArrowLeft size={20} className="mt-1" />
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupValuesComponent;
