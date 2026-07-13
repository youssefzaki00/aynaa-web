import { PrimaryDNS, SecondaryDNS } from "@/importantLinks";
import { Steps } from "./stepData";

const routerSteps: Steps = {
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
				data: "أدخل اسم المستخدم وكلمة المرور. جرّب admin / admin أولًا، أو راجع الملصق على ظهر الراوتر.",
			},
			{
				type: "screenshot",
				data: 0,
			},
			{
				type: "text",
				data: "إذا لم تنجح، فاسأل الشخص المسؤول عن الشبكة في المنزل.",
			},
		],

		step3: [
			{
				type: "text",
				data: "ابحث عن إعدادات DNS داخل لوحة الراوتر (LAN أو WAN أو Network Settings).",
			},
			{
				type: "text",
				data: `أدخل عناوين CleanBrowsing:\n - Primary DNS: ${PrimaryDNS}\n - Secondary DNS: ${SecondaryDNS}`,
			},
			{
				type: "link",
				data: {
					href: "/setupvalues",
					text: "لمعرفة المزيد عن الحماية ➡️",
				},
			},
		],
};

export default routerSteps;
