import { Steps } from "./stepData";

const windowsSteps: { gen1: Steps } = {
  gen1: {
    step1: [
      {
        type: "text",
        data: "أولاً، اضغط على زر الويندوز من لوحة المفاتيح لفتح قائمة Start.",
      },
      {
        type: "text",
        data: "بعد ذلك، اكتب 'cmd' في خانة البحث حتى يظهر البرنامج.",
      },
      {
        type: "text",
        data: "ثم، اضغط على 'Run as administrator' كما هو موضح في الصورة لتشغيله بالصلاحيات اللازمة.",
      },
      {
        type: "screenshot",
        data: 0,
      },
    ],
    step2: [
      {
        type: "text",
        data: "من هذه النقطة، ستصبح الخطوات أكثر تحدياً، لذا انتبه جيداً وركز في التفاصيل الدقيقة لأن أي خطأ قد يؤدي إلى توقف الإنترنت على اللابتوب.",
      },
    ],
    step3: [
      {
        type: "text",
        data: "أولاً، اكتب الأمر التالي بعد فتح النافذة:",
      },
      {
        type: "text",
        data: "netsh interface ip show interfaces",
      },
      { type: "screenshot", data: 0 },
      {
        type: "text",
        data: "بعد ذلك، اضغط Enter.",
      },
      {
        type: "text",
        data: "بعد الضغط على Enter، يجب أن يظهر لك جدول بالشكل التالي:",
      },
      {
        type: "screenshot",
        data: 1,
      },
      {
        type: "text",
        data: "سيظهر لك جدول؛ نحن نحتاج فقط إلى خانة 'Name'. المفروض أن الواجهات التي سنحتاجها هي Wi-Fi و Ethernet.",
      },
      {
        type: "text",
        data: "يُرجى تطبيق الخطوات التالية على كل واجهة تستخدمها، وفي الغالب ستجد أنها تظهر كـ 'Connected' إذا كنت متصلاً بها.",
      },
    ],
    step4: [
      {
        type: "text",
        data: "عند رؤية الكلمة '{ interface }' بين قوسين في التعليمات التالية، استبدلها باسم الواجهة الخاصة بك واكتبها بين علامتي اقتباس، مثل: \"Wi-Fi\".",
      },
      {
        type: "text",
        data: "كما ستستبدل 'primary_dns' بـ primary dns الخاص بمستوى الحماية الذي اخترته، و'secondary_dns' بالثاني.",
      },
      { type: "text", data: "أولاً، اكتب الأمر التالي:" },
      {
        type: "text",
        data: "netsh interface ip set dns { interface } static { primary_dns }",
      },
      {
        type: "screenshot",
        data: 0,
      },
      {
        type: "text",
        data: "على سبيل المثال، إذا كنت تريد تطبيق الحماية العالية على واجهة Wi-Fi، سيكون الأمر كالتالي:",
      },
      {
        type: "text",
        data: 'netsh interface ip set dns "Wi-Fi" static 15.184.191.201',
      },
      {
        type: "screenshot",
        data: 1,
      },
    ],
    step5: [
      {
        type: "text",
        data: "الآن، اكتب الأمر التالي واضغط Enter:",
      },
      {
        type: "text",
        data: "netsh interface ip add dns name={ interface } { secondary_dns } index=2",
      },
      {
        type: "screenshot",
        data: 0,
      },
      {
        type: "text",
        data: "على سبيل المثال، إذا اخترت الحماية العالية على واجهة Wi-Fi، سيكون الأمر كالتالي:",
      },
      {
        type: "text",
        data: 'netsh interface ip add dns name="Wi-Fi" 15.164.243.155 index=2',
      },
      {
        type: "screenshot",
        data: 1,
      },
    ],
  },
};

export default windowsSteps;
