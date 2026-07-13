"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_DATA = [
  {
    question: "لماذا انشأنا هذه المنصه",
    answer:
      "مع انتشار الإنترنت أصبح المحتوى الضار متاحًا بسهولة، ومن واجبنا كمسلمين غض البصر وحماية أنفسنا وأسرنا. أنشأنا هذه المنصة لتوفير حجب مجاني للمحتوى غير المناسب على الراوتر وأندرويد وويندوز، لمساعدة العائلات على توفير بيئة إنترنت أكثر أمانًا.",
  },
  {
    question: "ما المواد التي يحجبها",
    answer:
      "تحجب المنصة المواقع والمحتوى الإباحي والصريح وغير المناسب، بهدف حماية الأطفال والعائلات من التعرض للمحتوى الضار على الإنترنت.",
  },
  {
    question: "لمن هذه المنصة",
    answer:
      "هذه المنصة موجهة للآباء والأمهات الذين يريدون حماية أطفالهم، ولأي شخص يسعى لتجربة إنترنت أكثر أمانًا وانضباطًا في المنزل أو على أجهزته.",
  },
  {
    question: "ما مدي فعاليه الحجب",
    answer:
      "يعتمد الحجب على طريقة التفعيل والجهاز المستخدم (الراوتر، أندرويد، أو ويندوز)، ويوفر حماية قوية في معظم الحالات. مع ذلك، لا يمكن ضمان حجب بنسبة 100% لأن المحتوى الضار يتطور باستمرار.",
  },
  {
    question: "هل سيتم تتبع نشاطي أو تسجيله او حفظ بياناتي",
    answer:
      "لا. وفقًا لسياسة الخصوصية الخاصة بنا، لا يجمع التطبيق أو يتتبع أو يسجل أو يشارك بياناتك الشخصية أو نشاطك على الإنترنت.",
  },
  {
    question: "ما مدى امكانيه تجاوزه",
    answer:
      "يتضمن تطبيق أندرويد ميزة أمان ضد إلغاء التثبيت لمنع الإزالة غير المصرح بها، مما يعزز الاستمرارية في الحماية. ومع ذلك، لا توجد طريقة حماية يمكن ضمان عدم تجاوزها بالكامل.",
  },
  {
    question: "كيف يمكن الغاء الحجب",
    answer:
      "لإلغاء حماية الهاتف، يمكنك طلب إلغاء التثبيت من داخل التطبيق نفسه.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-10 text-center text-3xl font-bold lg:text-4xl">
          الأسئلة الشائعة
        </h2>

        <div className="flex flex-col gap-3">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-xl bg-gray-100"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-right"
                  aria-expanded={isOpen}
                >
                  <span className="flex-1 text-lg font-bold text-gray-900">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-gray-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-base leading-relaxed text-gray-700">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
