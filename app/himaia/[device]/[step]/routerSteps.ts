import { PrimaryDNS, SecondaryDNS, supportEmail } from "@/importantLinks";
import { Steps } from "./stepData";

const routerSteps: { gen1: Steps } = {
	gen1: {
		step1: [
			{
				type: "text",
				data: "ابدأ بالدخول إلى صفحة الراوتر في منزلك: افتح المتصفح واكتب في شريط العنوان 192.168.1.1.",
			},
			{
				type: "screenshot",
				data: 0,
			},
		],

		step2: [
			{
				type: "text",
				data: "عند دخولك لصفحة الراوتر، سيُطلب منك إدخال اسم المستخدم وكلمة المرور.",
			},
			{
				type: "text",
				data: "غالبًا ما تكون القيم الافتراضية:\n - (اسم المستخدم): admin \n - (كلمة المرور): admin \n جربهما أولًا.",
			},
			{
				type: "screenshot",
				data: 0,
			},
			{
				type: "text",
				data: "إذا لم تنجح البيانات الافتراضية، ابحث عن بيانات الدخول المطبوعة على ظهر الراوتر أو العلبة واستخدمها.",
			},
			{
				type: "screenshot",
				data: 1,
			},
			{
				type: "text",
				data: "إذا لم تنجح حتى بعد ذلك، فهذا يعني أن بيانات الدخول قد تم تغييرها، ويجب عليك الرجوع إلى الشخص المسؤول عن الشبكة.",
			},
		],

		step3: [
			{
				type: "text",
				data: "ابحث يدويًا عن إعدادات الـ (Primary DNS) و (Secondary DNS) داخل صفحة الراوتر.",
			},
			{
				type: "text",
				data: "ستجد هذه الإعدادات غالبًا داخل أحد الأقسام التالية:\n• (إعدادات الشبكة المحلية)(LAN Settings)\n• (إعدادات الإنترنت)(WAN Settings)\n• (إعدادات الاتصال بالإنترنت)(Internet Settings)\n• (إعدادات الشبكة)(Network Settings)\n• (إعدادات توزيع العناوين) (DHCP Settings)",
			},
			{
				type: "text",
				data: "إذا لم تتمكن من العثور عليها، راسلنا على البريد الإلكتروني للمساعدة.",
			},
			{
				type: "link",
				data: {
					href: `mailto:${supportEmail}`,
					text: `للتواصل عبر البريد: ${supportEmail}`,
				},
			},
			{
				type: "text",
				data: "أدخل عناوين DNS التالية (CleanBrowsing):",
			},
			{
				type: "text",
				data: `✅ الحماية:\n - (Primary DNS): ${PrimaryDNS}\n - (Secondary DNS): ${SecondaryDNS}`,
			},
			{
				type: "link",
				data: {
					href: "/setupvalues",
					text: "لمعرفة المزيد عن الحماية ➡️",
				},
			},
		],
	},
};

export default routerSteps;
