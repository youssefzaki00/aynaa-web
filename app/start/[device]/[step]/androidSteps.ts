import { Steps } from "./stepData";

const androidSteps: { gen1: Steps } = {
  gen1: {
    step1: [
      {
        type: "text",
        data: "قم بتنزيل تطبيق الأندرويد من متجر Google Play.",
      },
      {
        type: "text",
        data: "افتح التطبيق بعد التثبيت.",
      },
    ],
    step2: [
      {
        type: "text",
        data: 'اضغط على زر "تفعيل الحماية" في الشاشة الرئيسية.',
      },
      {
        type: "text",
        data: "اتبع التعليمات لمنح الأذونات المطلوبة للتطبيق.",
      },
    ],
    step3: [
      {
        type: "text",
        data: "قم بإنشاء كلمة مرور للتطبيق لمنع إلغاء تثبيته بدون إذن.",
      },
      {
        type: "text",
        data: 'تأكد من تفعيل خيار "بدء التشغيل التلقائي" في إعدادات التطبيق.',
      },
    ],
  },
};

export default androidSteps;
