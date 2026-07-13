"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_DATA = [
  {
    question: "لماذا انشأنا هذه المنصه",
    answer:
      "أنشأنا هذه المنصة لأن حماية العائلة من المحتوى الضار على الإنترنت أصبحت ضرورة اليوم. نوفر لك حماية مجانية وسهلة، وأفضل خيار لدينا هو تطبيق الأندرويد الذي يحمي هاتفك أو هاتف طفلك بشكل مباشر ومستمر أينما ذهبت.",
  },
  {
    question: "ما المواد التي يحجبها",
    answer:
      "تحميك من المواقع والمحتوى الإباحي والصريح وغير المناسب. مع تطبيق الأندرويد تحصل على حماية شاملة على هاتفك ضد الإباحية والمحتوى الضار، لتطمئن على ما يصل إلى أطفالك على الإنترنت.",
  },
  {
    question: "لمن هذه المنصة",
    answer:
      "لك أنت كأب أو أم تريد حماية أطفالك، ولأي شخص يهتم ببيئة إنترنت أكثر أمانًا. ننصحك بشدة بتثبيت تطبيق الأندرويد على هاتف طفلك أولًا؛ فهو أسرع طريقة لبدء الحماية اليوم.",
  },
  {
    question: "ما مدي فعاليه الحجب",
    answer:
      "تطبيق الأندرويد يوفر حماية قوية وفعّالة على الهاتف، وهو الخيار الذي ننصح به لأنه يعمل معك في كل مكان. كما نوفر خيارات إضافية على الراوتر وويندوز لتوسيع الحماية في المنزل.",
  },
  {
    question: "هل سيتم تتبع نشاطي أو تسجيله او حفظ بياناتي",
    answer:
      "لا، ويمكنك استخدام التطبيق بثقة تامة. لا نجمع بياناتك الشخصية ولا نتتبع نشاطك على الإنترنت، حتى تركز على حماية عائلتك دون أي قلق على خصوصيتك.",
  },
  {
    question: "ما مدى امكانيه تجاوزه",
    answer:
      "تطبيق الأندرويد مصمم ليبقى معك: يتضمن ميزة أمان ضد إلغاء التثبيت لضمان استمرار الحماية ومنع الإزالة غير المصرح بها. لهذا ننصحك بالاعتماد على التطبيق كخط دفاع أساسي لحماية أطفالك.",
  },
  {
    question: "كيف يمكن الغاء الحجب",
    answer:
      "إذا رغبت في إلغاء حماية الهاتف لاحقًا، يمكنك طلب إلغاء التثبيت من داخل التطبيق نفسه. أما الآن، فابدأ بالتثبيت وامنح أطفالك الحماية التي يستحقونها.",
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
